import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {


  }

  ngOnInit() {
  }

}
