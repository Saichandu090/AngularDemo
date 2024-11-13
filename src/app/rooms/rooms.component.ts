import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule], //Importing the ng modules i.e Inbulit Directives for Html file
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";

  noOfRooms: number = 10;

  myname: string = "-";

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 20
  }

  roomsList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner, Free Bathroom',
    price: 500,
    photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
    checkInTime: new Date('12-Nov-2024'),
    checkOutTime: new Date('13-Nov-2024')
  },
  {
    roomNumber: 2,
    roomType: 'Normal Room',
    amenities: 'Air cooler, Free Bathroom',
    price: 200,
    photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
    checkInTime: new Date('12-Nov-2024'),
    checkOutTime: new Date('13-Nov-2024')
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Central AC, Free Bathroom',
    price: 12200,
    photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
    checkInTime: new Date('12-Nov-2024'),
    checkOutTime: new Date('13-Nov-2024')
  }]
  click() {
    this.myname = "Sai chandu";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push("Item 4");
  }

  selectedColor: string = '';

  changeColor(color: string) {
    this.selectedColor = color;
  }
}
