import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from '../../auth-guard.service';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    AuthGuardService
  ],
})
export  class AuthModule {

}
