import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchContentComponent } from './search-content/search-content.component';

const routes: Routes = [

  {path: "content", component: ContentListComponent}, 
  {path: "content/id", component: ContentDetailComponent},
  {path: "", redirectTo: "/content", pathMatch: "full"},
  {path: "search", component: SearchContentComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
