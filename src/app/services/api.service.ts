import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl:String = 'http://localhost:4000'

  constructor(private http:HttpClient) { }


  //---------------------COMMON-------------------------------

  //login api
  loginApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/login` , reqBody)
  }


  //api to get home recipes
  homeRecipesApi(){
    return this.http.get(`${this.serverUrl}/home-recipes`)
  }


  //---------------------USER---------------------------------


  //register Api
  registerApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/user-register` , reqBody)
  }


  //api to get all recipes
  allRecipesApi(){
    return this.http.get(`${this.serverUrl}/all-recipes`)
  }


  //----------------------ADMIN-------------------------------


  

  


}
