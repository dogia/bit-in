import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { USER } from './../services/user.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {

  private email: string = null;
  private password: string = null;
  private repassword: string = null;
  private nickname: string = null;
  private fullname: string = null;
  private birthdate: string = null;
  private image: string = null;

  private fileToUpload: File = null;
  
  constructor(private toastr: ToastrService, private router: Router) { }

  async crear(){
    if (this.validarEmail() && this.validarNickname && this.validarPassword()){
      const result = await USER.crearUsuario(this.email, this.password, this.nickname, this.fullname, this.birthdate, this.image);
      if (result.code == 200){
        this.toastr.success('Tu nueva cuenta ha sido creada', 'Exito');
        this.router.navigate(['/home']);
      }else{
        this.toastr.error(result.msg, 'Error');
      }
    }
  }

  setBorder(id, valido, clear: boolean = true){
    // Pinta el input de color dependiendo de si es valido o no
    if (valido){
      document.getElementById(id).style.boxShadow = '0 0 4px #0f0';
    }else {
      document.getElementById(id).style.boxShadow = '0 0 4px #f00';
    }

    if (clear){
      setTimeout(()=>document.getElementById(id).style.boxShadow = '', 1000);
    }

  }

  handleInputChange(e) {
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
    this.image = reader.result;
  }

  validar(){
    if (!this.validarEmail()) return;
  }

  // Función que valida la posición de los caracteres en el input de email y da el mensaje de error al usuario
  validarEmail(){
    let valido = true;
    if (this.email === null || this.email == ''){
      this.toastr.error('El email no debe estar vacío', 'Completar');
      this.setBorder('email', false);
      return false; // Es el único que retorna directamente por que no podemos operar a una cadena como un valor núlo
    }

    if (this.email.indexOf('@') != this.email.lastIndexOf('@')){
      this.toastr.error('El email no debe contener más de una "@"', 'Corregir');
      valido = false;
    }

    if (this.email.lastIndexOf('@') > this.email.lastIndexOf('.')){
      this.toastr.error('Correo inválido @ mal ubicada', 'Corregir');
      valido = false;
    }

    if (this.email.lastIndexOf('.') > (this.email.length-3)){
      this.toastr.error('Correo inválido punto mal ubicado', 'Corregir');
      valido = false;
    }

    if (this.email.lastIndexOf('.') == -1){
      this.toastr.error('Correo inválido debe contener .', 'Corregir');
      valido = false;
    }

    if (this.email.lastIndexOf('@') == -1){
      this.toastr.error('Correo inválido debe contener @', 'Corregir');
      valido = false;
    }

    this.setBorder('email', valido);
    return valido;
  }

  validarPassword(){
    let valido = true;
    if (this.password === null || this.password == ''){
      this.toastr.error('No olvides poner la contraseña', 'Completar');
      this.setBorder('password', false);
      this.setBorder('repassword', false);
      return false; // Es el único que retorna directamente por que no podemos operar a una cadena como un valor núlo
    }

    if (this.password.length < 8){
      this.toastr.error('Tu contraseña debe contener al menos 8 caracteres', 'Corregir');
      valido = false;
    }

    if (this.repassword !== null && this.repassword != '' && this.password != this.repassword){
      this.toastr.error('Las contraseñas no coinciden', 'Corregir');
      valido = false;
    }

    this.setBorder('password', valido);
    this.setBorder('repassword', valido);
    return valido;
  }

  validarNickname(){
    let valido = true;
    if (this.nickname === null || this.nickname == ''){
      this.toastr.error('Debes elegir un Nickname', 'Completar');
      this.setBorder('nickname', false);
      return false; // Es el único que retorna directamente por que no podemos operar a una cadena como un valor núlo
    }

    if (this.nickname.length < 4){
      this.toastr.error('Tu nick debe contener al menos 4 caracteres', 'Corregir');
      valido = false;
    }

    this.setBorder('nickname', valido);
    return valido;
  }

  ngOnInit(): void {
  }

}
