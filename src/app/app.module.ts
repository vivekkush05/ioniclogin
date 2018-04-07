
import { GlobalProvider } from '../providers/globalProvider';
import { AuthService } from '../providers/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import {IonicStorageModule} from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	HttpModule,
	IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthService,GlobalProvider
  ]
})
export class AppModule {}