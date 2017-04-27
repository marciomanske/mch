import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from "../services/login/login.service";

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ["admin.component.css"]
})
export class AdminComponent implements OnInit {
  userData = {username: null};


  constructor(private loginService: LoginService, private router: Router) { 
  }

  

  ngOnInit() {

    this.loginService.getUserData().then(
      (res) => {
        this.userData = res.user;
      }, 
      (error) => {
        console.log(error); 
            this.userData = {username: null};
      }
    )
    
  }

  logoutClick() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
