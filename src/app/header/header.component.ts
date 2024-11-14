import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  title:string ='';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
