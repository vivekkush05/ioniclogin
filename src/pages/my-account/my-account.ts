import { Component } from '@angular/core';
import { NavController,Loading, AlertController, IonicPage, Events,ToastController,LoadingController,MenuController,NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/**
 * Generated class for the MyAccount page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyaccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
   // this.menu.enable(true, 'sidebar');
  }
  ngOnInit() {
    this.menu.enable(true, 'sidebar');
  }

  ionViewDidLoad() {
    //this.menu.enable(true, 'sidebar');
  //  console.log('ionViewDidLoad MyAccount');
  }

}
