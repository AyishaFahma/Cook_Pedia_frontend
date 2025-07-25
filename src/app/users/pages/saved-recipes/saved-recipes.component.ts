import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './saved-recipes.component.html',
  styleUrl: './saved-recipes.component.css'
})
export class SavedRecipesComponent {

  constructor(private router:Router){}

  viewRecipe(id:any){
        this.router.navigateByUrl(`/view/${id}`)
  }

}
