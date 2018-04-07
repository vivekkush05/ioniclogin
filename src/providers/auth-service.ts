//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API} from 	"../constants/api";
import {GlobalProvider} from "./globalProvider";
//import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/*export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
*/


@Injectable()
export class AuthService {
 

	//currentUser: User;
	constructor(private http: GlobalProvider) {

    }
 
	
	public login(data){
        return this.http.post(API.requests.login.post, data);
    }
	
	
	
	
 /* public login1(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 */
  public register(credentials) {
   /* if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }*/
  }
 
 /* public getUserInfo() : User {
    return "1";//this.currentUser;
  }
 */
  public logout() {
    return Observable.create(observer => {
      //this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}