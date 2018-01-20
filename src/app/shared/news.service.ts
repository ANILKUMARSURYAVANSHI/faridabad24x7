import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  constructor() { }
  getNewsList(){
    return newsList.slice(0)
  }
  getSuggestedList(){
    return suggestedNews
  }

  getNewsId(id:number){
    return newsList.find(newsid => newsid.id === id)
  }
}

const newsList:any = [
    {
      id: 0,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 1,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 2,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 3,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 4,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 5,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 6,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 7,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 8,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    },
    {
      id: 9,
      image:"../../assets/images/news-image.jpg",
      imageL:"../../assets/images/news-imageL.jpg",
      heading: "Use Treats to Make a Pet Food 'Seasoning' to Trick Fido Into Eating",
      author: "Emily Price",
      days: "5",
      desc: "We all know that sitting for long periods of time is bad for our health, but remembering to get up and takes break ..."
    }
  ]


 const suggestedNews:any = [
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