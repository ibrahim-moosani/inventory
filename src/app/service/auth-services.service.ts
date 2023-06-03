import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  FullPath = "http://localhost:51861/PlancksoftPOSJSON_Server.svc/";
 
  constructor(
    private httpclient: HttpClient,
  ) {
    console.log("Current API URL:", this.FullPath);
  }


  Test1(obj : any) {

    return this.httpclient.post(this.FullPath + "Login", obj);
  }

  Test2() {

    return this.httpclient.post(this.FullPath + "Login", "");
  }


}
