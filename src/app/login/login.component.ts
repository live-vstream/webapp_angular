import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MdSnackBar, MdSpinner } from '@angular/material';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  public inputEmail: string;
  public inputPassword: string;

  public formIsValid: boolean = true;
  public isLoading: boolean = false;
  private errorMessage: string = null;

  constructor(public auth: AuthService, public router: Router) {

  }

  ngOnInit() {
  }

  showErrorMessage(msg: string) {
    this.errorMessage = msg;
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }

  onLogin() {
    if(!this.inputEmail || !this.inputPassword) {
      this.formIsValid = false;
      this.showErrorMessage("Please enter valid email address and password.");
    } else {
      this.formIsValid = true;
      this.isLoading = true;

      // define a function to be called on error and on success
      this.auth.login(this.inputEmail, this.inputPassword).catch(err => {
        this.isLoading = false;
        console.log("error is " + err);
        this.showErrorMessage("Invalid email/password.");
        return Observable.throw(err);
      })
      .subscribe(data => {
        this.isLoading = false;
        console.log(data.user);
        if(data.status == 401 || data.user.role != 'Subscriber') {
          this.showErrorMessage("Invalid email/password.");
          
        } else {
          //this.snackbar.open("Success!");
          console.log("user data is " + data);
          this.auth.setUser(data);
          localStorage.setItem('token', data.token);
          // now we can safely use this.router to navigate to dashboard
          this.router.navigateByUrl('/dashboard')
        }
      });


    }
  }

}
