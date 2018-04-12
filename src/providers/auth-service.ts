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
	

	public register(credentials) {
		//return this.http.post(API.requests.login.post, data);
	}
 

}