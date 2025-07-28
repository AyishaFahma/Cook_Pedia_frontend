import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  constructor(private fb: FormBuilder , private api:ApiService) {

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
          
        },

        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }


  }

}
