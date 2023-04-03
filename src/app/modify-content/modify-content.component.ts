import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContent } from '../models/icontent';
import { VideoGamesService } from '../services/video-games.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  newContent: IContent = {
    id: 0,
    title: '',
    author: '',
    type: '',
    description: '',
    imgSrc: '',
    tags: []
  };
  editMode = false;
  tags = '';
  contentAdded = false;
  contentAddedMessage = 'Content successfully added!';
  contentUpdated = false;
  contentUpdatedMessage = 'Content successfully updated!';
  contentId: number | null = null;

  constructor(private videoGamesService: VideoGamesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editMode = true;
      this.contentId = +idParam;
      this.videoGamesService.getVideoGameById(this.contentId).subscribe((content: IContent) => {
        this.newContent = content;
      });
    }
  }

  onSubmit(form: NgForm) {
    this.newContent.tags = this.tags.split(',').map(tag => tag.trim());
    if (this.editMode) {
      this.videoGamesService.updateVideoGame(this.newContent).subscribe(() => {
        this.contentUpdated = true;
        setTimeout(() => {
          this.contentUpdated = false;
        }, 3000);
      });
    } else {
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

  get isEditing(): boolean {
    return this.editMode && this.contentId !== null;
  }
}
