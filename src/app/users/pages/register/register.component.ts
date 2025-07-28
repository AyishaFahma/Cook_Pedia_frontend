import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: any = {}

  constructor(private fb: FormBuilder, private api: ApiService , private router:Router) {

    // create e group
    this.registerForm = fb.group({
      username: ["", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  register() {

    if (this.registerForm.invalid) {
      //alert('Please fill the form Completely')

      // sweetalert
      Swal.fire({
        icon: 'info',
        title: 'Oops',
        text: 'Please fill the form Completely'
      })
    }
    else {

      //api call
      this.api.registerApi(this.registerForm.value).subscribe({
        next: (res: any) => {
          console.log(res);

          Swal.fire({
            icon: 'success',
            title: 'Awww',
            text: 'Registration Successfull'
          })

          this.router.navigateByUrl('/login')

        },
        error: (err: any) => {
          console.log(err);

          if (err.status == 406) {
            Swal.fire({
              icon: 'warning',
              title: 'Oops',
              text: `${err.error}`
            })
            this.registerForm.reset()
          }

          else {
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: 'Something Went Wrong'
            })
            this.registerForm.reset()
          }

        }
      })

    }
  }


}


