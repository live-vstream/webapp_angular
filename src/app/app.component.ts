import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'app works!';
  constructor(public auth: AuthService, public route: Router) {
    this.route.navigateByUrl("/login");

    /* Test login */
    this.auth.login("dailypctips@gmail.com", "1234").subscribe(data => {
      console.log(data);
    });
  }
}
