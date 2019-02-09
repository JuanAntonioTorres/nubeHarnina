import { LoginOrCreateUserPage } from './../login-or-create-user/login-or-create-user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nombreSiguientePagina:string = "PONER LA SIGUIENTE AQUI";
  
  constructor(public navCtrl: NavController) {
    
  }

  createUser() {
    this.navCtrl.push(LoginOrCreateUserPage,{"action":"create","nombreSiguientePagina":this.nombreSiguientePagina});
  }

  signIn() {
    this.navCtrl.push(LoginOrCreateUserPage,{"action":"signIn","nombreSiguientePagina":this.nombreSiguientePagina});
  }

}
