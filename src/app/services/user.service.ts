import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrComponentlessModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
 
/**
  * En los servicios se usará fetch en lugar de HttpClient
  */

@Injectable({
  providedIn: 'root'
})

// Clase que contendrá todos los métodos para gestión de usuarios con el API
class UserService {
  private id: number = null;
  private token: string = null;
  public nickname: string = null
  private image: string = null;
  private logged: boolean = false;

  private onlogin: Array<Function> = [];

  constructor() { }

  encode(object){
    let body = '';
    
    for (var i in object) {
        if (body.length > 0){
          body += `&${i}=${object[i]}`;
        }else{
          body += `${i}=${object[i]}`;
        }
    }

    return body;
  }

  // Permite iniciar sesión en la aplicación
  async login(email: string, password: string){
    const body = this.encode(
      {
        email: email,
        password: password,
        applicantcode: environment.applicantcode
      }
    );

    const query = await fetch(environment.URLs.usuarios.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    let res = null;

    await query.json().then((response)=>{
      const code = response.code;
      if (code == 200){
        this.id = response.data.iduser;
        this.token = response.data.token;
        this.nickname = response.data.nickname;
        this.image = response.data.image;
        this.logged = true;
      }
      
      res = response;
    });

    return res;
  }

  // Permite obtener la información de un usuario a partir de su id
  async verPorId(id: number){
    const response = await this.request(environment.URLs.usuarios.verPorId, {iduser: id});
    return response;
  }

  // Recibe todas las variables de un formulario y ejecuta la consulta para crear un cliente en el servidor
  async crearUsuario(email: string, password: string, nickname: string, fullname: string = null, birthdate: string = null, image: string = null){
    const usuario: any = {
      email: email,
      password: password,
      nickname: nickname,
    };

    if (fullname !== null) usuario.fullname = fullname;
    if (birthdate !== null) usuario.birthdate = birthdate;
    if (image !== null) usuario.image = image;

    // Código de identificación del aplicante
    usuario.applicantcode = environment.applicantcode;

    const body = this.encode(usuario);

    const query = await fetch(environment.URLs.usuarios.crear, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    let res = null;
    
    await query.json().then((response)=>{
      const code = response.code;
      if (code == 200){
        this.id = response.data.iduser;
        this.token = response.data.token;
        this.nickname = response.data.nickname;
        this.image = response.data.image;
        this.logged = true;
      }
      
      res = response;
    });


    return res;
  }

  // Edita datos del usuario en el sistema
  editarUsuario(nickname: string = null, fullname: string = null, birthdate: string = null, image: string = null){

  }

  // Cambia la contraseña del usuario
  async cambiarClave(password: string){
    const response = await this.request(environment.URLs.usuarios.cambiarPassword, {iduser: this.id, password: password})
    return response;
  }

  // Función que sirve para ejecutar consultas que requieren del token y retornar un JSON con la respuesta del servidor
  async request(url: string, params: any){
    params.token = this.token;
    params.applicantcode = environment.applicantcode;
    
    const body = this.encode(params);

    const query = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    let res = null;
    await query.json().then((response)=>(res = response));
    return res;
  }

  getImage(){
    return this.image;
  }

  getNickname(){
    return this.nickname;
  }

  getId(){
    return this.id;
  }

  isLogged(){
    return this.logged;
  }
}

// Exportamos una instancia, de forma que desde todo el aplicativo tengamos acceso a las mismas propiedades
export const USER = new UserService();