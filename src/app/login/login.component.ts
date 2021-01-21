import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { USER } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = null;
  public password: string = null;

  constructor(private toastr: ToastrService, private router: Router) { }

  async submit(){
    const result = await USER.login(this.email, this.password);

    if (result.code == 200){
      this.toastr.info(result.msg);
      this.router.navigate(['/home']);
    }else{
      this.toastr.error(result.msg);
    }
    
  }

  ngOnInit(): void {
  }

}
