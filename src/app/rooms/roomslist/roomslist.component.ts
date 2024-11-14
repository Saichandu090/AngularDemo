import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-roomslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roomslist.component.html',
  styleUrl: './roomslist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomslistComponent implements OnChanges{
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
}
