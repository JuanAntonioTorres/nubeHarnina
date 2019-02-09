import { FirebaseAuthenticationProvider } from './../../providers/firebase-authentication/firebase-authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;
  respuesta:any;
  constructor(public navCtrl: NavController,public authProvider:FirebaseAuthenticationProvider) {
  }

  createUser() {
    this.authProvider.createUser(this.email, this.password).then(()=>{
      this.respuesta = "registrado con exito";
    }).catch((error)=>{
      this.respuesta = error;
    })
  }

  signIn(){
		this.authProvider.signIn(this.email, this.password).then(()=>{
      this.respuesta = "session iniciada";
    }).catch((error)=>{
      this.respuesta = error;
    })
  }

}
