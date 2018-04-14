import { Component } from '@angular/core';
import { NavController,Loading, AlertController, IonicPage, Events,ToastController,LoadingController,MenuController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RegisterService } from '../../providers/RegisterService';
import {ServerResponse} from "../../Interface/ServerResponse";
 


@IonicPage({
   name: 'RegisterPage',
    segment: 'RegisterPage',
    priority: 'high'
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
   providers: [RegisterService]
})
export class RegisterPage  {
	//createSuccess = false;
  //registerCredentials = { email: '', password: '' };
  private registerForm : FormGroup;  
  loader: Loading;

  constructor(private nav: NavController, private alertCtrl: AlertController,private registerService: RegisterService,private events: Events,private formBuilder: FormBuilder,
					private toastCtrl: ToastController,private loadingCtrl: LoadingController, public menu: MenuController) { 
  
	  this.registerForm = this.formBuilder.group({
            name: 	  ['',  Validators.compose([Validators.required, Validators.minLength(8)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
			mobile:   ['', Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
			
        });
		
  }
 
 
 /*
  public register1() {
   this.registerService.register(this.registerForm).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
  
  */
   
 /* showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
  */
ionViewDidLoad() {
    this.menu.enable(false, 'sidebar');
}

 
    register() {
        this.showLoader();
        this.registerService.register(JSON.stringify(this.registerForm.value)).subscribe(
            (res: ServerResponse) => {
            /* Hande response */
            this.dismissLoader();
            let data = this.responseHandler(res);
			
            if (data == 0) {
                return;
            }
            if(data.body == false){
                this.presentToast(data.message, "bottom", 3000);
            } else {
               // this.data = data.body;
                this.presentToast(data.message, "bottom", 3000);
            }
        }, err => {
            this.dismissLoader();
             return this.handleError(err);
            //this.index = 1;
        });
    }
	

  
 

  
      responseHandler(response: ServerResponse): any {
        if (typeof response.error != "undefined" && response.error != "") {
            return this.handleError(response.error);
        }
        /* Additional conditions to generate error */
        return response;
    }

    handleError(err): number {
        /* Handel error */
        this.presentToast(err.message, "bottom", 3000);
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

    showLoader() {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            spinner: "ios"
        });
        this.loader.present();
    }

    dismissLoader() {
        this.loader.dismiss();
    }
  
  
  
  
  
  
  
  
  
  
  
}