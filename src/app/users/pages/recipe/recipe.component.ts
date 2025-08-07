import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent , DatePipe , FormsModule , SearchPipe , NgxPaginationModule ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  
  //for pagination
  p: number = 1;

  // search recipe in input box
  searchKey:string = ""

  allRecipes:any = []
  dummyRecipes:any = []

  allCuisine:any = []

  mealType:any = []


  time:any = new Date()




  constructor(private router:Router , private api:ApiService){ }


  //content when page load
  ngOnInit(){

    //to get the time for checking purpose
    //console.log(this.time);
    
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

    // only logined user is able to navigate to view a single recipe so token checking

    if(sessionStorage.getItem("token")){

      this.router.navigateByUrl(`/view/${id}`)
    }
    else{
      Swal.fire( {
        icon:'info',
        title:'Oops' , 
        text:'Please Login'
      })
      this.router.navigateByUrl('/login')
    }
    
  }

}
