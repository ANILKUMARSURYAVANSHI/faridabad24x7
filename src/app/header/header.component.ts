import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { }

  ngOnInit() { }
  menus:any = [
    {
      key : "Home",
      value : "Home"
    },
    {
      key : "About us",
      value : "About us"
    },
    {
      key : "Contact us",
     value : "Contact us"
    },
    // how to make submenu
];
  smm:any[] = [];
  

}
