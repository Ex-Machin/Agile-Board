import { Directive, HostListener, Inject, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { Social } from './signin-interfaces';

@Directive({
  selector: '[appO2AuthSignin]',
})
export class O2AuthSigninDirective {
  @Input() social!: string;

  constructor(private afAuth: AngularFireAuth) {}

  methods: Social = {
    facebook: new firebase.FacebookAuthProvider(),
    google: new firebase.GoogleAuthProvider(),
    twitter: new firebase.TwitterAuthProvider(),
    github: new firebase.GithubAuthProvider(),
  };

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(
      this.methods[this.social as keyof typeof this.methods]
    );
  }
}
