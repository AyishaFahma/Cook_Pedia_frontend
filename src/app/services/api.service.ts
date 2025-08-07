import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  //headers
  appendToken(){

    //class ne base cheythanu so ceate instance for that

    let headers = new HttpHeaders()


    const token = sessionStorage.getItem("token")

    if(token){
      headers = headers.append("Authorization" , `Bearer ${token}`)
    }

    return {headers} // key:value here both are same so put one


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


  //api to view single recipe
  viewRecipeApi(id:string){
    return this.http.get(`${this.serverUrl}/view-recipes/${id}`)
  }


  //api to save recipe
  saveRecipeApi(recipeId:string , reqBody:any){
    return this.http.post(`${this.serverUrl}/add-savedRecipe/${recipeId}` , reqBody , this.appendToken())
  }


  //----------------------ADMIN-------------------------------


  

  


}
