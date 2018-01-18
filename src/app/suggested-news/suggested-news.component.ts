import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-suggested-news',
  templateUrl: './suggested-news.component.html',
  styleUrls: ['./suggested-news.component.css']
})
export class SuggestedNewsComponent implements OnInit {
  suggestedNews
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.suggestedNews = this.newsService.getSuggestedList()
  }

}
