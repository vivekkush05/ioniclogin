import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage,NavParams,Events,ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServerResponse} from "../../Interface/ServerResponse";
//import {Device} from '@ionic-native/device';

import {Storage} from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {
  
  private loginForm: FormGroup;  
  loading: Loading;

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/
  constructor(private nav: NavController,public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController,
			private loadingCtrl: LoadingController,private storage: Storage, private events: Events,private formBuilder: FormBuilder, private toastCtrl: ToastController) { 
			
			
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
           // device_id: [this.device.uuid, Validators.required],
            //device_type: [this.device.platform, Validators.required]
        });
			
			}
 
   public createAccount() {
		this.nav.push('RegisterPage');
	}



  public login() {
        this.showLoading();
        this.auth.login(JSON.stringify(this.loginForm.value)).subscribe(
            (res: ServerResponse) => {
                this.dismissLoader();
                let data = this.responseHandler(res);
                if (data == 0) {
                    return;
                }

                if (data.body == false) {
                    this.presentToast(data.message, "bottom", 2000);

                } else {
                    // store values in storage
                    this.storage.set('loginData', {
                        token: data.token,
                        name: data.name,
                        user_id: data.userID,
                        member_id: data.memberID,
                        profile_pic: ""
                    }).then(() => {
                        console.log('stored')
                    }).catch(error => {

                    });
						
                    this.events.publish('user:login');
					
					
					 this.redirect();
					
                   // this.getCbtp(data.token, data.first_time_login, data.name);

                    this.loginForm.reset();
                    this.presentToast(data.message, "bottom", 3000);
                }
            }, error => {
                this.dismissLoader();
                return this.handleError(error);
            });

    }

	  redirect() {
        this.nav.setRoot('HomePage');
    }	


	
  /* public login1() {
	   
	   
    this.showLoading()
	this.auth.login(this.registerCredentials).subscribe(
	allowed => {
      if (allowed) {        
        this.nav.setRoot('HomePage');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
	}
 */
 
    responseHandler(response: ServerResponse): any {
        if (typeof response.error != "undefined" && response.error != "") {
            return this.handleError(response.error);
        }
        /* Additional conditions to generate error */
        return response;
    }

    handleError(err): number {
        /* Handel error */
        this.presentToast(err.message, "bottom", 2000);
        return 0;
    }
	
	 presentToast(msg, pos, duration): void {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: pos
        });
        toast.present();
    }
	
	
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  
   dismissLoader() {
        this.loading.dismiss();
    }
  
  
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
	/*ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }*/

}
