import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { VideoGamesService } from './services/video-games.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    VideoGamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
