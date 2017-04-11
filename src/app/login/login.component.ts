import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MdSnackBar, MdSpinner } from '@angular/material';


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

  constructor(public auth: AuthService, public snackbar: MdSnackBar) {

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

      // start a login request using auth here
      this.auth.login(this.inputEmail, this.inputPassword).subscribe(data => {
        this.isLoading = false;
        if(data) {
          data.json();
        } else {
          this.snackbar.open("Unknown error. Please try again.");
        }
      });
    }
  }

}
