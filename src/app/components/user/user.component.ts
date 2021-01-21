import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { USER } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public showChangePass: boolean = false;
  public imageprofileURL: string = '#';
  public user: any = {};

  public password: string = '';
  public repassword: string = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.imageprofileURL =  `//apibitwanv1.tk/public/uploads/${environment.applicantcode}/users/${USER.getId()}/${USER.getImage()}`;
    this.loadData();
  }

  async loadData(){
    const response = await USER.verPorId(USER.getId());
    this.user = response.data;
  }

  async cambirClave(){
    if (this.password.length > 7 && this.password == this.repassword){
      const response = await USER.cambiarClave(this.password);
      this.toastr.info(response.msg, 'Nueva contraseña');
      this.password = '';
      this.repassword = '';
    }else{
      if (this.password.length < 8)
        this.toastr.info('Tu contraseña debe contener 8 caracteres al menos.', 'Nueva contrasñea');
      if (this.password != this.repassword){
        this.toastr.info('Las contraseñas no coinciden', 'Nueva contrasñea')
      }
    }
    
  }
}
