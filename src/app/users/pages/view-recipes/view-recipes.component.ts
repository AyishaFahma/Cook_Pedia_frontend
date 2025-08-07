import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-view-recipes',
  standalone: true,
  imports: [HeaderComponent , RouterLink],
  templateUrl: './view-recipes.component.html',
  styleUrl: './view-recipes.component.css'
})
export class ViewRecipesComponent {

  // to store the recipe data
  recipeDetails:any = [];

  //to get releted recipe
  relatedRecipe:any = []

  // dependency inject
  constructor(private api:ApiService , private route:ActivatedRoute){}


  ngOnInit(){

    // here we use callback in subscribe coz only +ve response

    this.route.params.subscribe( (res:any)=>{
      console.log(res);
      const {id} = res

    this.getViewRecipe(id)  
    })
    
  }


  getViewRecipe(id:string){
    this.api.viewRecipeApi(id).subscribe( {
      next:(res:any)=>{
        console.log(res);
        this.recipeDetails = res

        //to get related recipes by cuisine
        this.getRelatedRecipes(res.cuisine , res._id)
        
      },

      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



  // get related recipe in below part
  getRelatedRecipes(cuisine:string , id:string){

    this.api.allRecipesApi().subscribe( {
      next:(res:any)=>{
        console.log(res);

        this.relatedRecipe = res.filter( (item:any)=> item.cuisine == cuisine && item._id != id)
        console.log(this.relatedRecipe);
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }


  //to save recipe fun
  saveRecipe(){

    const reqBody = {
      name : this.recipeDetails.name,
      image : this.recipeDetails.image
    }

    this.api.saveRecipeApi(this.recipeDetails._id , reqBody).subscribe( {

      next:(res :any) =>{
        console.log(res);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
