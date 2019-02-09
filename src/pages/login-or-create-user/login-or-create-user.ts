import { FirebaseAuthenticationProvider } from './../../providers/firebase-authentication/firebase-authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginOrCreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-or-create-user',
  templateUrl: 'login-or-create-user.html',
})
export class LoginOrCreateUserPage {

  //action decide que boton se muestra en la vista
  action:string;
  email: string;
  password: string;
  respuesta: any;
  allOk:boolean = false;
  nombreSiguientePagina: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: FirebaseAuthenticationProvider) {
    this.action =  navParams.get("action");
    this.nombreSiguientePagina = navParams.get("nombreSiguientePagina");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOrCreateUserPage');
  }

  createUser() {
    this.authProvider.createUser(this.email, this.password).then(() => {
      this.respuesta = "registrado con exito";
      this.allOk=true;
    }).catch((error) => {
      this.respuesta = error;
    })
  }

  signIn() {
    this.authProvider.signIn(this.email, this.password).then(() => {
      this.respuesta = "session iniciada";
      this.allOk=true;
    }).catch((error) => {
      this.respuesta = error;
    })
  }

  finalize(){
    this.navCtrl.setRoot(this.nombreSiguientePagina);
  }

}
