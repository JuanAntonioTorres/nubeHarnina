import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams:NavParams) {
  }

  createUser() {
    this.navParams.data.action="create";
    this.navCtrl.push(RegisterPage,this.navParams);
  }

  signIn() {
    this.navParams.data.action="signIn";
    this.navCtrl.push(RegisterPage,this.navParams);
  }

}
