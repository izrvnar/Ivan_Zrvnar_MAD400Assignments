import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { contentList } from './data/mock-content';
import { IContent } from './models/icontent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    return contentList
  };

}
