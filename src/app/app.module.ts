import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Firebase} from '@ionic-native/firebase';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication';
import { FirebaseAuthentificationMockProvider } from '../providers/firebase-authentification-mock/firebase-authentification-mock';
import { FirebaseAuthenticationProvider } from '../providers/firebase-authentication/firebase-authentication';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,Firebase,FirebaseAuthentication,FirebaseAuthentificationMockProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseAuthenticationProvider
  ]
})
export class AppModule {}
