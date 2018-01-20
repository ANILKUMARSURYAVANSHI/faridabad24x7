import { Routes } from '@angular/router';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LatestNewsDetailComponent } from './latest-news/latest-news-detail/latest-news-detail.component';

export const appRoutes:Routes = [
    {path :'latest-news', component:LatestNewsComponent},
    {path:'latest-news/latest-news-detail/:id', component:LatestNewsDetailComponent},
    {path: '', redirectTo:'/latest-news', pathMatch:'full'},
]

