import { Component, ViewChild } from '@angular/core';
import { Nav,Platform ,Events,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage   } from '@ionic/storage';
import {HEADERCONSTANTS} from "../constants/headerConstants";

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'


 
 
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
	  @ViewChild(Nav) nav: Nav;
  
	public rootPage: any; 
	loggedIn: boolean = false;
    storedData: any = null;
    name = '';
	 pages: [{
        title: string,
        component: any,
        image: string
    }] = [
        {
            title: 'Deals & Plans',
            component: HomePage,
            image: 'assets/images/landing/deal_icon_sidenav.png'
        },
        
    ];
	
	
	
	
  constructor(platform: Platform, statusBar: StatusBar,private alertCtrl: AlertController, splashScreen: SplashScreen,private storage: Storage,private events: Events) {
	   
	   
	   this.listenToLoginEvents();
	   this.storage.get('loginData').then(logged => {
           if (logged) {
			   this.events.publish('user:login');
			   this.nav.setRoot(HomePage);
           } else {
			    this.nav.setRoot(LoginPage);
           }
		});
	  
	  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
	   
    });
		
		
   }
  
  
  
	listenToLoginEvents() {
        this.events.subscribe('user:login', () => {
            this.loggedIn = true;
            this.storage.get('loginData').then(data => {
                if (data !== null) {
                    this.storedData = data;
                    this.name = this.storedData.name;
					
                } else {
                    this.storedData = null;
                }
            });
        });
		
		
        this.events.subscribe('user:logout', () => {
            this.loggedIn = false;
        });
    }
  
  
    openPage(page) {
    this.nav.push(page.component);
	}
  
  
    loginPage() {
        this.nav.push(LoginPage);
    }
	
	logout() {
		 this.events.publish('user:logout');
        this.storage.remove('loginData').then(
            () => console.log('removed'),
            (error) => console.log(error)
        );
        this.presentAlert('Come Back Soon!', 'You have been logged out successfully');
		this.nav.push(LoginPage);
	}
	
	presentAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
	
	
	
	 getProfilePic() {
        if (this.storedData != null && typeof  this.storedData.profile_pic != "undefined" && this.storedData.profile_pic != null && this.storedData.profile_pic != '') {
            return this.storedData.profile_pic;
        } else {
            return 'assets/imgs/landing/profile_icon.png';
        }
    }
  
  
}

