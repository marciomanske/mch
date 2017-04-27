import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from "../login/login.service";



@Injectable()
export class AuthGuardService implements CanActivate  {

constructor(private loginService: LoginService, private router: Router) { }

canActivate() {
    let okGo = this.loginService.loggedIn();
    if (!okGo) {
      this.router.navigate(['/main']);
    }
    return okGo;
  }


}
