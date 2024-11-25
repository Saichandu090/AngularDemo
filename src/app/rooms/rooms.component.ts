import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule, NgIf } from '@angular/common';
import { RoomslistComponent } from "./roomslist/roomslist.component";
import { HeaderComponent } from "../header/header.component";
import { Head, Observable, Subject, Subscription } from 'rxjs';
import { RoomsService } from './services/rooms.service';
import { AppModule } from "../app.module"
import { HttpEventType, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [AppModule,CommonModule, RoomslistComponent, HeaderComponent], //Importing the ng modules i.e Inbulit Directives for Html file
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit,AfterViewChecked {
  http: any;
  
  
  constructor(@SkipSelf() private roomService: RoomsService) {
    this.roomService=roomService;
  }
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  
  hotelName = "Hilton Hotel";

  noOfRooms: number = 10;

  myname: string = "-";

  hideRooms: boolean = true;

  title: string = '';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 20
  }


  totalBytes: number = 0;

  subscription! : Subscription;

  // rooms$=this.roomService.getRooms().pipe(

  // );

  error$!: Subject<string>;

  roomsList: RoomList[] = [];

  stream = new Observable(observer=>{
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
    //observer.error('error');
  })

  ngOnInit(): void {
    //console.log(this.headerComponent);

    this.roomService.getPhotos().subscribe((event:any) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been sent to the server");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request success");
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log("Downloading");
          this.totalBytes += event.loaded;
          console.log(this.totalBytes);
          break;
        }
        case HttpEventType.Response: {
          console.log("Request success");
          break;
        }
      }
    });

    this.stream.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Completed");
      }
    });
    this.roomService.getRooms().subscribe((rooms: RoomList[]) => {
      this.roomsList = rooms;
    });
  }

  // rooms$ =this.roomService.getRooms$.pipe(

  // );
  

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = 'Sai Chandu';
  }
  ngDoCheck(): void {
    console.log("on changes is called");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked is called");
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
    this.roomService.addRoom(room).subscribe((data:any) => {
      this.roomsList = data;
    });
  }

  editRoom(){
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Waste Room',
      amenities: 'Air conditioner, Free Bathroom',
      price: 100,
      photos: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg',
      checkInTime: new Date('12-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 4.5
    }
    this.roomsList = [...this.roomsList, room];
    this.roomService.editRoom(room).subscribe((data:any) => {
      this.roomsList = data;
    });
  }

  deleteRoom(){
    this.roomService.deleteRoom('52fe8128-18bc-4304-8ba6-6f6c87f808bc').subscribe((data:any) => {
      this.roomsList = data;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}