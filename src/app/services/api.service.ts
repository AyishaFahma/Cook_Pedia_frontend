import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl:String = 'http://localhost:4000'

  constructor(private http:HttpClient) { }


  //register Api
  registerApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/user-register` , reqBody)
  }

  //login api
  loginApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/login` , reqBody)
  }


}
