import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './models/icontent';

@Pipe({
  name: 'filterIContent'
})

  export class FilterIContentPipe implements PipeTransform {
    transform(contentList: IContent[], typeFilter?: string): IContent[] {
      if (!contentList) return [];
      if (!typeFilter) {
        return contentList.filter((content) => !content.type);
      } else {
        return contentList.filter((content) => content.type === typeFilter);
      }
    }

}
