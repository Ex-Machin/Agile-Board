import { Directive, HostListener, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';

@Directive({
  selector: '[appFacebookSignin]'
})
export class FacebookSigninDirective {

  constructor(private afAuth: AngularFireAuth){}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.FacebookAuthProvider())
  }

}
