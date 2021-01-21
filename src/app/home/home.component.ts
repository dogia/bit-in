import { Component, OnInit } from '@angular/core';

import { USER } from '../services/user.service'

import { HeaderComponent } from '../components/header/header.component';
import { PostsComponent } from '../components/posts/posts.component';
import { UserComponent } from '../components/user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (!USER.isLogged()) this.router.navigate(['']);
  }

}
