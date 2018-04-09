import { Component } from '@angular/core';
import { Loading, LoadingController, MenuController, NavController, NavParams, ToastController ,AlertController,Events} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	
	 loader: Loading;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private storage: Storage,private events: Events) {

  }
	
	
   logout() {
      //  this.showLoader();
        this.events.publish('user:logout');
        this.storage.remove('loginData').then(
            () => console.log('removed'),
            (error) => console.log(error)
        );
        this.presentAlert('Come Back Soon!', 'You have been logged out successfully');
        //this.dismissLoader();
		//this.navCtrl.push('LoginPage');
    }

	
    presentAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

  
	
}
