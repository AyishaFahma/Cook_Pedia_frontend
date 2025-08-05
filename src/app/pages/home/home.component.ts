import { Component } from '@angular/core';
import { HeaderComponent } from '../../users/components/header/header.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //give a variable to store the homerecipe data
  homeRecipes:any = []

  constructor(private api:ApiService){}

  //when page load content will be loading by using ngonInit 
  //get the data when page loads

  ngOnInit(){
    this.getHomeRecipes()
  }

  //home recipes getting function
  getHomeRecipes(){
    this.api.homeRecipesApi().subscribe( {
      next:(res:any)=>{
        console.log(res);
        this.homeRecipes = res
        
      },

      error: (err:any)=>{
        console.log(err);
        
      }
    })
  }

}
