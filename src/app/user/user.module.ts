import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { O2AuthSigninDirective } from './o2auth-signin-directives/o2auth-signin.directive';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    EmailLoginComponent,
    O2AuthSigninDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
