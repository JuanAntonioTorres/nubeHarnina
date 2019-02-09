import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOrCreateUserPage } from './login-or-create-user';

@NgModule({
  declarations: [
    LoginOrCreateUserPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOrCreateUserPage),
  ],
})
export class LoginOrCreateUserPageModule {}
