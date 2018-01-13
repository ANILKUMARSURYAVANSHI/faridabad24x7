import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  caroselImages:any = [
    {
    id: 0,
    image: "../../assets/images/how-work.jpg",
    heading: "The Worst Life Hacks of 2017",
    },
    {
      id: 1,
      image: "../../assets/images/how-work.jpg",
      heading: "The Worst Life Hacks of 2017",
    },
    {
      id: 2,
      image: "../../assets/images/how-work.jpg",
      heading: "The Worst Life Hacks of 2017",
     }
  
  ]

  constructor() { }

  ngOnInit() {
    //$('.carousel').carousel()

  }

}
