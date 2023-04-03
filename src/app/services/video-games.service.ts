import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  private serverUrl = 'api/content';

  constructor(private http: HttpClient) { }

  getVideoGames(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this.serverUrl);
  }

  getVideoGameById(id: number): Observable<IContent> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<IContent>(url);
  }

  addVideoGame(videoGame: IContent): Observable<IContent> {
    return this.http.post<IContent>(this.serverUrl, videoGame);
  }

  updateVideoGame(videoGame: IContent): Observable<void> {
    const url = `${this.serverUrl}/${videoGame.id}`;
    return this.http.put<void>(url, videoGame);
  }

  removeVideoGame(id: number): Observable<void> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
