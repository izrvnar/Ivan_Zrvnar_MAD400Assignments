import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IContent } from '../models/icontent';
import { VideoGamesService } from '../services/video-games.service';  


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  contentItem?: Observable<IContent>;

  constructor(private videoGamesService: VideoGamesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const contentID = +params['id'];
      this.contentItem = this.videoGamesService.getVideoGameById(contentID);
    });
  
  
  }

}
