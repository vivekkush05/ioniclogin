import { Component ,ViewChild} from '@angular/core';
import { Nav,Loading, LoadingController, MenuController, NavController,IonicPage, NavParams, ToastController ,AlertController,Events} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {Storage} from '@ionic/storage';
import {LoginPage} from "../login/login";
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/*
@IonicPage({
   // name: 'HomePage',
    segment: 'HomePage'
    
})
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   storedData: any = {};
	loader: Loading;
    header = HEADERCONSTANTS.homePage;
	 

	constructor(public navCtrl: NavController,private alertCtrl: AlertController,private storage: Storage,private events: Events,public menu: MenuController) {
    
        this.menu.enable(true, 'sidebar');
	}
	
	
/*	logout() {
      //  this.showLoader();
        this.events.publish('user:logout');
        this.storage.remove('loginData').then(
            () => console.log('removed'),
            (error) => console.log(error)
        );
        this.presentAlert('Come Back Soon!', 'You have been logged out successfully');
        //this.dismissLoader();
		this.navCtrl.push(LoginPage);
    }
*/
	
    presentAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

  
	
}
