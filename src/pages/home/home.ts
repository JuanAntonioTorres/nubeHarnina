import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;
  respuesta:any;
  constructor(public navCtrl: NavController,public Firebase:Firebase, public firebaseAuthentication: FirebaseAuthentication) {
  }

  signIn() {
    this.firebaseAuthentication.createUserWithEmailAndPassword(this.email, this.password).then((res: any) => {
        console.log(res);
        this.respuesta = res;
      }).catch((error: any) =>{
         console.error("soy el error "+error);
         this.respuesta = error;
      })
  }

  logIn(){
		this.firebaseAuthentication.signInWithEmailAndPassword(this.email,this.password).then((res:any)=>{
      console.info(res);
      this.respuesta = res;
    }).catch((error:any)=>{
      console.info(error);
      this.respuesta = error;
    })
  }

}
