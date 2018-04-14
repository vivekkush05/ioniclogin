
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
import { RegisterPage } from '../pages/register/register';
import {RegisterModule} from '../pages/register/register.module';
import { MyaccountPage } from '../pages/my-account/my-account';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MyaccountPage
	//RegisterPage
  ],
  imports: [
    BrowserModule,
  IonicModule.forRoot(MyApp, {}, {links: [{ component: RegisterPage, name: 'RegisterPage', segment: 'Register' },
                                          { component: LoginPage, name: 'LoginPage', segment: '' },
                                          { component: HomePage, name: 'HomePage', segment: 'Home' }  
   ]}),
	HttpModule,
	IonicStorageModule.forRoot(),
	RegisterModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  LoginPage,
    RegisterPage,
    MyaccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthService,GlobalProvider
  ]
})
export class AppModule {}
