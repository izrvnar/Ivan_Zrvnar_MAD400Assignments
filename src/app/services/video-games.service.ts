import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from 'src/data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {
  private videoGames: IContent[] = contentList;

  constructor() { }

  getVideoGames(): Observable<IContent[]> {
    return of(contentList);
  }

  getVideoGameById(id: number): Observable<IContent> {
    const videoGame = this.videoGames.find(content => content.id === id);
    if (!videoGame) {
      throw new Error(`Video game with id ${id} not found`);
    }
    return of(videoGame);
  }


  addVideoGame(videoGame: IContent): Observable<IContent[]> {
    this.videoGames.push(videoGame);
    return of(this.videoGames);
  }

  updateVideoGame(videoGame: IContent): Observable<IContent[]> {
    const index = this.videoGames.findIndex(content => content.id === videoGame.id);
    this.videoGames[index] = videoGame;
    return of(this.videoGames);
  }

  removeVideoGame(id: number): Observable<IContent> {
    const index = this.videoGames.findIndex(content => content.id === id);
    const removedVideoGame = this.videoGames.splice(index, 1);
    return of(removedVideoGame[0]);
  }

}
