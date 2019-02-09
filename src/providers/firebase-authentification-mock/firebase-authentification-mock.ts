import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseAuthentificationMockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthentificationMockProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseAuthentificationMockProvider Provider');
  }


  createUserWithEmailAndPassword(email: string, password: string): Promise<Object | string> {
    return new Promise((resolve, reject) => {
      if (email.length > 0 && password.length > 0) {
        resolve({ email: email, password: password, uid: "ye5UDeMQwsb3gbPxCnVNw9Eojz23" });
      }
      else reject("soy la descripcion de un error");
    })
  }


  signInWithEmailAndPassword(email: string, password: string): Promise<Object | string> {
    return new Promise((resolve, reject) => {
      if (email.length > 0 && password.length > 0) {
        resolve({ email: email, password: password, uid: "ye5UDeMQwsb3gbPxCnVNw9Eojz23" });
      }
      else reject("soy la descripcion de un error");
    })
  }
  
}
