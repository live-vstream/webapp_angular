import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
    // not the best way to protect routes, but i'll just use this for now
    this.route.navigateByUrl("/login");
  }

}
