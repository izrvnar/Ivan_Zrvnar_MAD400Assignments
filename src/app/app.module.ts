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


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentDetailComponent,
    SearchContentComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    VideoGamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
