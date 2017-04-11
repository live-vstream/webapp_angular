import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app works!';
  constructor(public auth: AuthService, public route: Router) {
    if(this.auth.isLoggedIn == false) {
      this.route.navigateByUrl("/login");
    }


    /* Test login */
    // this.auth.login("dailypctips@gmail.com", "1234").subscribe(data => {
    //   console.log(data);
    // });
  }

  logOut() {
    this.auth.setUser(null);
    this.auth.isLoggedIn = false;
    // not the best way to protect routes, but i'll just use this for now
    this.route.navigateByUrl("/login");
  }
}
