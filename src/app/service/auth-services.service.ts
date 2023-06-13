import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  FullPath = "https://localhost:44349/api/Publish/publish";
 
  constructor(
    private httpclient: HttpClient,
  ) {

  }

  PostRequest(method:string, data:any){
    var request = {
      Method:method,
      Data:data
    }
    return this.httpclient.post(this.FullPath , request);
  }


}
