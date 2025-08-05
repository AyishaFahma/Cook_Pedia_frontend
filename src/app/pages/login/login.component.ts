import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any = {}

  constructor(private fb: FormBuilder , private api:ApiService , private router:Router) {

    this.loginForm = fb.group({

      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

    })

  }

  login(){

    if(this.loginForm.invalid){
      Swal.fire( {
        icon :'info',
        title :'Oops',
        text :'Please fill the form Completely'
      })
    }

    else{
      this.api.loginApi(this.loginForm.value).subscribe( {
        next: (res:any)=>{
          console.log(res);
          Swal.fire( {
            icon:'success',
            title:'Aww',
            text:'Login Successfull'
          })
          sessionStorage.setItem("existingUser" , JSON.stringify(res.existingUser))

          sessionStorage.setItem("token" , res.token)

          // movement
          if(res.existingUser.role == 'user'){
            this.router.navigateByUrl('/')
          }
          else{
            this.router.navigateByUrl('/admin-dashboard')
          }
          
        },

        error:(err:any)=>{
          console.log(err);

          // incase error
          if( err.status >= 400 && err.status < 500 ){
            Swal.fire( {
            icon:'warning',
            title:'Oops',
            text:`${err.error}`
          })
          this.loginForm.reset()
          }
          else{
            Swal.fire( {
            icon:'error',
            title:'Oops',
            text:'Something went wrong'
          })
          this.loginForm.reset()
          }
          
        }
      })
    }


  }

}
