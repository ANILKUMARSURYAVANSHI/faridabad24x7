import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  newsList:any
  constructor(private newsService:NewsService) { }

  ngOnInit() {
   this.newsList = this.newsService.getNewsList();
   
  }

}
