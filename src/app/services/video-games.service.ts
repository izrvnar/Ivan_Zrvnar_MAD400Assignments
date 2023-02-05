import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from 'src/data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  constructor() { }

  getVideoGames(): Observable<IContent[]> {
    return of(contentList);
  }

}
