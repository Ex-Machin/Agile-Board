import { Directive, HostListener, Inject, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import { Social } from './signin-interfaces';

@Directive({
  selector: '[appO2AuthSignin]',
})
export class O2AuthSigninDirective {
  @Input() social!: string;

  constructor(private afAuth: AngularFireAuth,  private router: Router) {}

  methods: Social = {
    facebook: new firebase.FacebookAuthProvider(),
    google: new firebase.GoogleAuthProvider(),
    twitter: new firebase.TwitterAuthProvider(),
    github: new firebase.GithubAuthProvider(),
  };

  @HostListener('click')
  onclick() {

    const provider = this.methods[this.social as keyof typeof this.methods];

    this.afAuth.signInWithPopup(
      provider
    ).then(({user}) => {
      this.router.navigate(['/cabinet' ])

      localStorage.setItem('user', JSON.stringify(user));
      JSON.parse(localStorage.getItem('user')!);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  }
}
