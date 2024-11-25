import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit {

  id!: number;

  private router: ActivatedRoute = inject(ActivatedRoute);

  constructor(router: ActivatedRoute) { }

  id$ = this.router.paramMap.pipe(
    map(params => params.get('roomid'))
  );

  ngOnInit(): void {

    //this.id=this.router.snapshot.params['roomid'];
    //this.router.params.subscribe((params => this.id = params['roomid']))
  }
}
