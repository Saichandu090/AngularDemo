import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { HoverDirective } from '../custom-directives/hover.directive';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
  email :string='';
  password :string='';

  login() {
    if(this.email==="admin@gmail.com" && this.password==="Admin"){
      alert('Login Successfull');
      console.log("Logged In")
    }
  }
}
