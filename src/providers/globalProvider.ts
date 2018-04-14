import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';
import {API} from "../constants/api";
import {Observable} from "rxjs/Observable";
import {ServerResponse} from "../Interface/ServerResponse";
import {AlertController, ToastController} from "ionic-angular";


@Injectable()
export class GlobalProvider {
    requestParam: any = {};
    allowAlert = true;

    constructor(public http: Http, private toastCtrl: ToastController, private alertCtrl: AlertController/*public modalCtrl: ModalController*/) {

    }

    get(url): Observable<any> {
        return this.http.get(API.baseUrl + url).timeout(5000).map((res) => {
            let data: ServerResponse = res.json();
            if (data.statuscode != 200) {
                /* Error */
                let errMsg = {
                    status: data.statuscode,
                    message: data.message,
                    statusText: "Something",
                };
                return Observable.throw(errMsg);
            }
            return data || {};
        }).catch((error) => {
            let serverError = error;
            let errMsg = "";
            if (serverError != null && serverError.status == 0) {
                errMsg = "no_internet";
                // this.presentErrorModal();
            } else {
                errMsg = (error.message) ? error.message :
                    error.status ? `${error.status} - ${error.statusText}` : "Server error";
            }
            if (errMsg == "no_internet") {
                this.presentAlert('Please Check Your Internet Connection');
            } else {
                this.presentAlert('Something went wrong');
            }

            return Observable.throw(errMsg);
        });
    }

    post(url, request) {
        let headers = new Headers();

            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append('Accept','application/json');
         
            
        return this.http.post(API.baseUrl + url, 'data=' + request, {  headers: headers})
		.timeout(5000).map((res) => {
				let data: ServerResponse = res.json();
			 if (data.statuscode != 200) {
                let errMsg = {
                    status: data.statuscode,
                    message: data.message,
                    statusText: "Something",
                };
                return Observable.throw(errMsg);
            }
			
            return data || {};
        }).catch(error => {
            let serverError = error;
            let errMsg = "";
            if (serverError != null && serverError.status == 0) {
                errMsg = "no_internet";
            } else {
                errMsg = (error.message) ? error.message :
                    error.status ? `${error.status} - ${error.statusText}` : "Server error";
            }
            if (errMsg == "no_internet") {
                this.presentAlert('Please Check Your Internet Connection');
            } else {
                this.presentAlert('Something went wrong');
            }
            return Observable.throw(errMsg);
        });
    }

    presentToast(msg, pos, duration): void {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: pos
        });

        toast.onDidDismiss(() => {

        });

        toast.present();

    }

    presentAlert(message) {
        if (!this.allowAlert) {
            return;
        }
        this.allowAlert = false;
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: [{
                text: 'Ok',
                handler: () => {
                    this.allowAlert = true;
                }
            }]
        });
        alert.present();
    }

}