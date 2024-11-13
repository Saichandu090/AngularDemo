import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  // template: `<h1>Hi from inline template</h1>
  // <p>Angular is awesome</p>`,
  styleUrl: './app.component.scss',
  //styles: [`h1{color:red;}`]
})
export class AppComponent {
  title = 'hotelinventory';
  role:string="Admin";
}
