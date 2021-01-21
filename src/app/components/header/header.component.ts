import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public time: string = '';
  public visible: boolean = false;
  public user: {image: string, nickname: string} = {
    image: null,
    nickname: null
  }

  constructor(private router: Router) {
    this.watchTime();
  }

  watchTime(){
    const now = new Date();
    this.time = `${now.getHours()}:${now.getMinutes()} ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;
    setTimeout(this.watchTime, 1000);
  }

  hideMenu(){
    document.getElementById('menu-user-data').style.visibility = 'collapse';
  }

  showMenu(){
    document.getElementById('menu-user-data').style.visibility = 'visible';
  }

  switchDisplayMenu(){
    if (this.visible){
      this.hideMenu();
    }else{
      this.showMenu();
    }

    this.visible = !this.visible;
  }

  cerrarSesion(){
    // USER.cerrarSesion();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    // Ruta de la imagen del usuario en el servidor remoto
    this.user.image =  `http://apibitwanv1.tk/public/uploads/${environment.applicantcode}/users/${USER.getId()}/${USER.getImage()}`;
    this.user.nickname = USER.getNickname();
  }
}
