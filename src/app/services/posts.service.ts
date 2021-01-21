import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { USER } from './user.service';

@Injectable({
  providedIn: 'root'
})

class PostsService {
  constructor() { }

  async verPorId(id: number){
    const data = await USER.request(environment.URLs.publicaciones.verPorId, {idpost: id});
    return data;
  }

  async verPorIdUsuario(id: number){
    const data = await USER.request(environment.URLs.publicaciones.verPorUsuarioId, {iduser: id});
    return data;
  }

  async eliminarPost(id: number){
    const data = await USER.request(environment.URLs.publicaciones.eliminar, {idpost: id});
    return data;
  }

  async editarPost(id: number, descripcion: string, likes: Array<number>){
    const data = await USER.request(environment.URLs.publicaciones.editar, {idpost: id, description: descripcion, likes: likes});
    return data;
  }

  async publicar(idUser: number, descripcion: string = null, imagen: string = null){
    const obj: any = {
      iduser: idUser
    };

    if (descripcion !== null) obj.description = descripcion;
    if (imagen !== null) obj.image = imagen;

    const data = await USER.request(environment.URLs.publicaciones.crear, obj);
    return data;
  }

}

export const POSTS: PostsService = new PostsService();