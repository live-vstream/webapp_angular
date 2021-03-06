import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private currentUser = null;
  public isLoggedIn = false;
  private authApiUrl: string = "http://localhost:3000/api/auth";

  constructor(public http: Http) {
    let exists = JSON.parse(localStorage.getItem('currentUser'))

    if(exists) {
       this.currentUser = exists;
       this.isLoggedIn = true;
    }
   }

  /* Returns an Observable by launching an http POST request to out auth/login */
  login(email: string, password: string): Observable<Response> {
    let body = {
      email: email,
      password: password
    };
    return this.http.post(this.authApiUrl + "/login", body)
            .map(res => res.json());
  }

  getUser() {
    return this.currentUser;
  }

  public setUser(userObj) {
    if(userObj != null) {
      this.isLoggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(userObj));
    }
    this.currentUser = userObj;
  }

  public logOut() {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

}
