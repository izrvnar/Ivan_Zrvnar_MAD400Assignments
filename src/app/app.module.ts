import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { VideoGamesService } from './services/video-games.service';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppRoutingModule } from './app--routing.module';
import { SearchContentComponent } from './search-content/search-content.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceService } from './in-memory-data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentDetailComponent,
    SearchContentComponent,
    PageNotFoundComponent,
    TopNavigationBarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {
      delay: 1000
    }),


  ],
  providers: [
    VideoGamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
