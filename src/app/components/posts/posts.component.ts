import { Component, OnInit } from '@angular/core';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { USER } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { POSTS } from '../../services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  initialPosts = [];
  array = [];
  throttle = 300;
  scrollDistance = 1;

  text: string = null;
  imagen: string = null;

  public user: {image: string, nickname: string} = {
    image: null,
    nickname: null
  }

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.user.image = `http://apibitwanv1.tk/public/uploads/${environment.applicantcode}/users/${USER.getId()}/${USER.getImage()}`;
    this.user.nickname = USER.getNickname();
    this.verPorUsuarioId();   
  }

  preparePost(posts: any){
    // Preparamos las URLs de las imágenes del post
    for (const i in posts){
      if (posts[i].image != null && posts[i].image.length)
        posts[i].imageURL = `${environment.URLs.uploads}/${environment.applicantcode}/posts/${posts[i].idpost}/${posts[i].image}`;
      else posts[i].imageURL = null

      if (posts[i].userimage != null && posts[i].userimage.length)
        posts[i].userimageURL = `${environment.URLs.uploads}/${environment.applicantcode}/users/${posts[i].iduser}/${posts[i].userimage}`;
      else posts[i].userimageURL = null


      
    }

    return posts;
  }

  // Cargar los posts
  async verPorUsuarioId(){
    const result = await POSTS.verPorIdUsuario(USER.getId());
    this.array = this.preparePost(result.data);
    this.initialPosts = this.preparePost(result.data);
    console.log(this.array);
  }

  async deletePost(id: number){
    const result = await POSTS.eliminarPost(id);
    console.log(result);
    this.verPorUsuarioId();
    return;
  }

  onScrollDown(){
    for(const i in this.initialPosts){
      this.array.push(this.initialPosts[i]);
    }
  }

  async publicar(){
    this.toastr.success('Estamos publicando tu contenido', 'Publicación');

    if (this.imagen == "Uploading"){
      setTimeout(this.publicar, 1000);
      return;
    }

    const result = await POSTS.publicar(USER.getId(), this.text, this.imagen);
    if (result.code == 200){
      this.toastr.success(result.msg, 'Publicación');
    }else{
      this.toastr.success(result.error, 'Publicación');
    }
    
    // Reiniciamos el input de carga y el campo de texto de los posts
    (document.getElementById('image') as unknown as HTMLInputElement).value = null;
    this.text = ''

    // Recargamos las publicaciones
    this.verPorUsuarioId();
    this.imagen = null;
  }

  comment(id){
    console.log(id);
  }

  handleInputChange(e) {
    this.imagen = 'Uploading';
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imagen = reader.result;
  }

}
