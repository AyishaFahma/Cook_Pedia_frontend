import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLogin:boolean = false


  ngOnInit(){
    if(sessionStorage.getItem("token")){
      this.isLogin = true
    }
  }

}
