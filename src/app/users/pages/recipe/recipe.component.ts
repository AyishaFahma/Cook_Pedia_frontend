import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  allRecipes:any = []
  dummyRecipes:any = []

  allCuisine:any = []

  mealType:any = []

  constructor(private router:Router , private api:ApiService){ }


  //content when page load
  ngOnInit(){
    this.getAllRecipes()
  }



  //to get all recipes
  getAllRecipes(){
    this.api.allRecipesApi().subscribe( {
      next:(res:any)=>{
        console.log(res);
        this.allRecipes = res
        this.dummyRecipes = res
        console.log(`dummyrecipes array ${this.dummyRecipes}`);
        

        //cuisine filtering
        this.allRecipes.map( (item:any) => item.cuisine).forEach( (item:any) => {
          if(!this.allCuisine.includes(item)){
            this.allCuisine.push(item)
          }
        })
        console.log(this.allCuisine);



        //mealType filtering
        this.allRecipes.map( (item:any) => item.mealType).flat().forEach( (item:any) => {
          if(!this.mealType.includes(item)){
            this.mealType.push(item)
          }
        })
        console.log(this.mealType);

        //other way
        // this.allRecipes.map( (item:any) => {
        //   item.mealType.map( (item:any) => {
        //     ! this.mealType.includes(item) && this.mealType.push(item)
        //   })
        // })
        // console.log(this.mealType);
        
                
      },

      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



  //no filter
  nofilter(){
    this.allRecipes = this.dummyRecipes
  }



  //to apply filter for cuisine
  FilterCuisineType(data:string){
    console.log(data);

    this.allRecipes = this.dummyRecipes.filter( (item:any) => item.cuisine == data)
  
  }


  //to aply filter for meal Type
  FilterMealType(data:string){
    console.log(data);

    this.allRecipes = this.dummyRecipes.filter( (item:any) => item.mealType.includes(data))// coz here mealType is an array so use includes
  
  }


  viewRecipe(id:any){
    this.router.navigateByUrl(`/view/${id}`)
  }

}
