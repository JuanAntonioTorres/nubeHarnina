import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Firebase } from '@ionic-native/firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import { FirebaseAuthentificationMockProvider } from '../providers/firebase-authentification-mock/firebase-authentification-mock';
import { FirebaseAuthenticationProvider } from '../providers/firebase-authentication/firebase-authentication';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RegisterPage
  ],
  providers: [
    StatusBar, Firebase, FirebaseAuthentication, FirebaseAuthentificationMockProvider,
    SplashScreen,FirebaseAuthenticationProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
  ]
})
export class AppModule { }
