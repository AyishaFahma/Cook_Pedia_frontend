import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { RecipeComponent } from './users/pages/recipe/recipe.component';
import { ViewRecipesComponent } from './users/pages/view-recipes/view-recipes.component';
import { AboutComponent } from './users/pages/about/about.component';
import { ContactComponent } from './users/pages/contact/contact.component';
import { ProfileComponent } from './users/pages/profile/profile.component';
import { SavedRecipesComponent } from './users/pages/saved-recipes/saved-recipes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminDownloadsComponent } from './admin/pages/admin-downloads/admin-downloads.component';
import { AdminRecipesComponent } from './admin/pages/admin-recipes/admin-recipes.component';
import { AdminRequestsComponent } from './admin/pages/admin-requests/admin-requests.component';
import { AdminUsersComponent } from './admin/pages/admin-users/admin-users.component';

export const routes: Routes = [

    // path
    {path:'' , component:HomeComponent},
    
    {path:'login' , component:LoginComponent},


    // users
    {path:'register' , component:RegisterComponent},

    {path:'all-recipes' , component:RecipeComponent},

    {path:'view/:id' , component:ViewRecipesComponent},

    {path:'about' , component:AboutComponent},

    {path:'contact' , component:ContactComponent},

    {path:'profile' , component:ProfileComponent},

    {path:'saved-recipes' , component:SavedRecipesComponent},



    //admin path

    {path:'admin-dashboard' , component:AdminDashboardComponent},

    {path:'admin-downloads' , component:AdminDownloadsComponent},

    {path:'admin-recipes' , component:AdminRecipesComponent},

    {path:'admin-requests' , component:AdminRequestsComponent},

    {path:'admin-users' , component:AdminUsersComponent},




    //page not found
    {path:'**' , component:PageNotFoundComponent}
];
