import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SuggestedNewsComponent } from './suggested-news/suggested-news.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LatestNewsDetailComponent } from './latest-news/latest-news-detail/latest-news-detail.component';
import { NewsService } from './shared/news.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestNewsComponent,
    SuggestedNewsComponent,
    HomeCarouselComponent,
    FooterComponent,
    LatestNewsDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
