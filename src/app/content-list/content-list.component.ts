import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGamesService } from '../services/video-games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  //define array of Icontent with 4 items
  evenBackgroundClass = 'even-background';
  oddBackgroundClass = 'odd-background'
  contentList: IContent[];
  

  constructor(private videoGamesService: VideoGamesService) {
    this.contentList = [];
   }

  ngOnInit() {
    this.videoGamesService.getVideoGames().subscribe((IContentArrayOfData: IContent[]) => {
      this.contentList = IContentArrayOfData;
    });
  }

}

