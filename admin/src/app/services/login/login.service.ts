import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions, RequestMethod}    from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';

//import { LoginResult } from "../../dto/LoginResult";
import {ConfigService} from "../../config/config.service";
import {BaseHttpService} from "../base/base-http.service";



@Injectable()
export class LoginService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) {
    super(http, "user", config);
  }

  login(data): Promise<any> {
    let headers = new Headers({ 'Authorization': 'Basic YnJvd3Nlcjo=' });
        let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    let url = this.config.url.baseAddress + this.config.url.user.login
        + "?grant_type=password&username="+data.username+
          "&password="+data.password+"&scope=ui";
    
    let body = JSON.stringify(data);

    return this.http.post(url, body, options)
        .toPromise()
        .then(function(res) {
            
            const result = res.json();
            localStorage.setItem("token", result.access_token);
            //localStorage.setItem("user", JSON.stringify(result.user));

            //return result;
            return {status: 1, token: result.access_token};
        })
        .catch(function(error) {
            console.log(error); 
            let description = JSON.parse(error._body).error_description;
            return {status: 2, message: description}
        });
  }

  recoverPassword(email: string): Promise<any> {

    //let postUrl = this.config.url.user.recoverPassword + "/" + email;
    //return this.executeOther(postUrl, "post", {});
    return null;
  }

  loggedIn(): boolean {
        return localStorage.getItem("token") != null;
  }

  logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
  }

  getUserData(): any {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Authorization': 'Bearer '+token});

    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    let url = this.config.url.baseAddress + this.config.url.user.userData;
    return this.http.get(url, options)
        .toPromise()
        .then(function(res) {
            
            const result = res.json();
            localStorage.setItem("user", JSON.stringify(result.principal));

            //return result;
            return {status: 1, user: result.principal};
        })
        .catch(function(error) {
            console.log(error); 
            let description = JSON.parse(error._body).error_description;
            return {status: 2, message: description}
        });
      
      
     
  }

}
