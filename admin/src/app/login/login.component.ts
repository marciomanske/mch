import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from "../services/login/login.service";

@Component({
  selector: 'app-content',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  emailRecover: string = null;
  errorMessage: string = null;
  showError: boolean = false;

  recoverErrorMessage: string = null;
  recoverMessage: string = null;


  constructor(private router: Router, private loginService: LoginService ) {}

 signinClick(username, password) {
    let data = {
      scope: 'ui',
			username: username,
			password: password,
			grant_type: 'password'
    };
    this.loginService.login(data).then(

        res => { if (res.status === 1) {
          /*
          if (res.user.role !== "ADMIN") {
            this.loginFail({status: 2, message: "Access Forbidden"});
            return;
          } */

          this.loginSuccess(res);
        } else {
          this.loginFail(res);
        }

        }
    );
  }

  loginSuccess(result: any) {
    this.router.navigate(['/admin']);
    //alert("Success ! Token = " + result.token);
  }

  loginFail(result: any) {
    alert("Fail ! Message = " + result.message);
    /*
    this.errorMessage = result.message;
    this.showError = true;
    let that = this;
    setTimeout(function() {
      that.showError = false;
    }, 5000); */
  }

  recoverPassord(email: string) {
    this.recoverMessage = null;
    this.recoverErrorMessage = null;
    if (email === null && email.trim() === "") {
      this.recoverErrorMessage = "Email cannot be empty!";
      return;
    }
    this.loginService.recoverPassword(email).then(

        res => {

          if (res.status && res.status === 1) {
            this.recoverMessage = "Email sent";
          } else {
            this.recoverErrorMessage = res.message;
          }
          setTimeout(() => {
            this.emailRecover = null;
            this.recoverMessage = null;
            this.recoverErrorMessage = null;
          }, 3000);
        }
    );
  }

}
