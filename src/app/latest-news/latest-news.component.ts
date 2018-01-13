import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  newsList:any = [
    {
      id: 0,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 1,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 2,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 3,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 4,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 5,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 6,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 7,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 8,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 9,
      image:"../../assets/images/news-image.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    }
  ]
  ;
  constructor() { }

  ngOnInit() {
   
  }

}
