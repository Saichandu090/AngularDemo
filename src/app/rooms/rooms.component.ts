import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule, NgIf } from '@angular/common';
import { RoomslistComponent } from "./roomslist/roomslist.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomslistComponent, HeaderComponent], //Importing the ng modules i.e Inbulit Directives for Html file
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  
  @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent;
  
  hotelName = "Hilton Hotel";

  noOfRooms: number = 10;

  myname: string = "-";

  hideRooms: boolean = false;

  title: string = '';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 20
  }

  roomsList: RoomList[] = [];

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomsList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free Bathroom',
      price: 500,
      photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
      checkInTime: new Date('12-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Normal Room',
      amenities: 'Air cooler, Free Bathroom',
      price: 200,
      photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
      checkInTime: new Date('12-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 3.4567
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Central AC, Free Bathroom',
      price: 12200,
      photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
      checkInTime: new Date('12-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 5.0
    }];
  }

  

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }
  ngDoCheck(): void {
    console.log("on changes is called");
  }

  click() {
    this.myname = "Sai chandu";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = this.hideRooms ? 'Rooms List' : 'Rooms';
  }

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push("Item 4");
  }

  selectedColor: string = '';

  changeColor(color: string) {
    this.selectedColor = color;
  }

  selectedRoom!: RoomList;

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free Bathroom',
      price: 500,
      photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
      checkInTime: new Date('12-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 4.5
    }
    this.roomsList = [...this.roomsList, room];
  }
}