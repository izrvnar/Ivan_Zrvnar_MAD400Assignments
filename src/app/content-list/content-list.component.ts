import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  //define array of Icontent with 4 items
  evenBackgroundClass = 'even-background';
  oddBackgroundClass = 'odd-background'
  

  constructor() {

}
}
