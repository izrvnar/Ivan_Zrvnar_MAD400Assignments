import { Component, Inject } from '@angular/core';
import { IContent } from './models/icontent';
import { VideoGamesService } from './services/video-games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ivan Zrvnars Favroutite Video Games';
  contentItem: IContent | undefined;
  constructor() { 
  }
}



