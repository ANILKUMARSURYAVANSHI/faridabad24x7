import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latest-news-detail',
  templateUrl: './latest-news-detail.component.html',
  styleUrls: ['./latest-news-detail.component.css']
})
export class LatestNewsDetailComponent implements OnInit {
  newsDetail:any;

  constructor( private newsService:NewsService ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.newsDetail = this.newsService.getNewsId(+this.route.snapshot.params['id'])
  }

}
