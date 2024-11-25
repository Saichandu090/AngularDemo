import { Component } from '@angular/core';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string='';
  password:string='';

  login()
  {
    if(this.email==="admin@gmail.com" && this.password==="Admin"){
      alert('Login Successfull');
      console.log("Logged In")
    }
  }
}
