import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';

const routes: Routes = [

  { path: 'content', component: ContentListComponent },
  { path: 'content/:id', component: ContentDetailComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'addContent', component: ModifyContentComponent },
  {path: "search", component: SearchContentComponent},
  { path: 'editContent/:id', component: ModifyContentComponent },
  {path: "**", component: PageNotFoundComponent}
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
