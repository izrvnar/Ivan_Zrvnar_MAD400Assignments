import { Component, Input, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGamesService } from '../services/video-games.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  contentID? : number;
  contentItem?: IContent;
  errorMessage: string = "No content found"


  constructor(private videoGamesService: VideoGamesService) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getContent() {
    this.videoGamesService.getVideoGameById(this.contentID!).subscribe(contentItem => {
      if (contentItem) {
        this.contentItem = contentItem;
      } else {
        this.errorMessage
      }
    });
  }

}

