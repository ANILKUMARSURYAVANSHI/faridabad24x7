import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SuggestedNewsComponent } from './suggested-news/suggested-news.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestNewsComponent,
    SuggestedNewsComponent,
    HomeCarouselComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
