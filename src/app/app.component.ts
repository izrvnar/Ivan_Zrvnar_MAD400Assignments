import { Component, Inject } from '@angular/core';
import { IContent } from './models/icontent';
import { VideoGamesService } from './services/video-games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I_Zrvnar_FavouriteVideoGames';
  contentItem: IContent | undefined;
  constructor(@Inject(VideoGamesService) private videoGameService: VideoGamesService) { 
    this.videoGameService.getVideoGameById(2).subscribe(content => this.contentItem = content);
  }
}



