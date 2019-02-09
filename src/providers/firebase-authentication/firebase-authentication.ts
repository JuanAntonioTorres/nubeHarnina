import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

/*
  Generated class for the FirebaseAuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthenticationProvider {

  signIn(email: string, password: string): any {
    return new Promise((resolve, reject) => {
      this.firebaseAuthentication.signInWithEmailAndPassword(email, password).then((res: any) => {
        resolve();
      }).catch((error: string) => {
        reject(error);
      })
    })
  }

  createUser(email: string, password: string): Promise<Object | string> {
    return new Promise((resolve, reject) => {
      this.firebaseAuthentication.createUserWithEmailAndPassword(email, password).then((res: any) => {
        resolve();
      }).catch((error: string) => {
        reject(error);
      })
    })
  }

  constructor(public http: HttpClient,, public Firebase: Firebase, public firebaseAuthentication: FirebaseAuthentication) {
    console.log('Hello FirebaseAuthenticationProvider Provider');
  }

}
