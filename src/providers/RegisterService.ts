import {Injectable} from "@angular/core";
import {GlobalProvider} from "./globalProvider";
import {API} from "../constants/api";

@Injectable()
export class RegisterService{


    constructor(private http: GlobalProvider){

    }
	
	
	public register(data) {
		return this.http.post(API.requests.signup.post, data);
	}	
	
	
     getRoleApi(data) {
         return this.http.post(API.requests.role.post, data);
     }

     getCompanyType(data){
        return this.http.post(API.requests.role.post, data);
     }

     saveLoginDetail(data){
         return this.http.post(API.requests.saveLogin.post, data);
     }

     saveOtp(data){
     return this.http.post(API.requests.sendOtp.post, data);
     }

     resendOtp(data){
        return this.http.post(API.requests.resendOtp.post, data);
     }

     savePersonalDetails(data){
        return this.http.post(API.requests.personalDetails.post, data);
     }

     saveCompanyDetails(data){
        return this.http.post(API.requests.companyDetails.post, data);
     }

     saveBusinessDetails(data){
        return this.http.post(API.requests.businessDetails.post, data);
     }

    finish(data){
        return this.http.post(API.requests.finish.post, data);
    }
}