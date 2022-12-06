import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Social } from '../o2auth-signin-directives/signin-interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  facebook = 'facebook';
  google = 'google';
  twitter = 'twitter';
  github = 'github';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
