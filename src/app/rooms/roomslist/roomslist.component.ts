import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hinv-roomslist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './roomslist.component.html',
  styleUrl: './roomslist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomslistComponent implements OnChanges,OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  @Input() rooms: RoomList[] =[];

  @Input() title : string = '';

  @Output () selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
      console.log("On Destroy is called");
  }
}
