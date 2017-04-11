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

  constructor(public auth: AuthService, public snackbar: MdSnackBar, public router: Router) {

  }

  ngOnInit() {
  }

  onLogin() {
    if(!this.inputEmail || !this.inputPassword) {
      this.formIsValid = false;
      this.snackbar.open("Please enter valid email address and password.");
    } else {
      this.formIsValid = true;
      this.isLoading = true;

      // define a function to be called on error and on success
      this.auth.login(this.inputEmail, this.inputPassword).catch(err => {
        this.isLoading = false;
        console.log("error is " + err);
        this.snackbar.open("Invalid email/password.");
        return Observable.throw(err);
      })
      .subscribe(data => {
        this.isLoading = false;
        if(data.status == 401) {
          this.snackbar.open("Invalid email/password.");
        } else {
          this.snackbar.open("Success!");
          // now we can safely use this.router to navigate to dashboard
          this.router.navigateByUrl('/dashboard')
        }
      });


    }
  }

}
