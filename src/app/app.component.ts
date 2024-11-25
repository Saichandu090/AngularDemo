import { AfterViewInit, Component, ElementRef, Inject, NgModule, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { localStorageToken } from "../app/localstorage.token";
import { AppNavComponent } from "./app-nav/app-nav.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AppNavComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hi from inline template</h1>
  // <p>Angular is awesome</p>`,
  styleUrl: './app.component.scss',
  //styles: [`h1{color:red;}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';
  role:string="Admin";

  @ViewChild('name',{static:true}) name!: ElementRef;
  
  constructor(@Inject(localStorageToken) private localStorage: Storage){

  }

  ngOnInit(): void {
      this.name.nativeElement.innerText="Sai Chandu";
      this.localStorage.setItem("name","Hilton Hotel"); // Using value provided by the injector
  }
  // @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.noOfRooms=50;
  // }
}
