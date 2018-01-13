import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-news',
  templateUrl: './suggested-news.component.html',
  styleUrls: ['./suggested-news.component.css']
})
export class SuggestedNewsComponent implements OnInit {

  suggestedNews: any = [
    {
      id: 0,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    },
    {
      id: 1,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    },
    {
      id: 2,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    },
    {
      id: 3,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    },
    {
      id: 4,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    },
    {
      id: 5,
      image: "../../assets/images/how-work.jpg",
      title: " I am Gokul Visweswaran, Co-Founder of NFN Labs, and This is How I Work",
      
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
