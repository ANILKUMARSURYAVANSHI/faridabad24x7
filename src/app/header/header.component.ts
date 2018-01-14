import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { }

  ngOnInit() { }
  menus:any[] = ['LIFE', 'TECH', 'HEALTH', 'PRODUCTIVITY', 'JUGAAD WORK', 'MONEY', 'HOW I WORK', 'GALLERY'];
  smm:any[] = [];
  

}
