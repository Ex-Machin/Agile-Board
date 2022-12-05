import { Directive, HostListener, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth){

  }

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider())
  }

}
