import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IContent } from '../models/icontent';
import { VideoGamesService } from '../services/video-games.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: IContent = {
    id: 0,
    title: '',
    author: '',
    type: '',
    description: '',
    imgSrc: '',
    tags: []
  };
  tags = '';
  contentAdded = false;
  contentAddedMessage = 'Content successfully added!';

  constructor(private videoGamesService: VideoGamesService) {}

  onSubmit(form: NgForm) {
    this.newContent.tags = this.tags.split(',').map(tag => tag.trim());
    this.videoGamesService.addVideoGame(this.newContent).subscribe(addedContent => {
      this.contentAdded = true;
      form.reset();
      this.tags = '';
      setTimeout(() => {
        this.contentAdded = false;
      }, 3000);
    });
  }
}
