import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {StoryListComponent} from './story-list/story-list.component';

const routes: Routes = [
  {path: ':story/timeline', component: TimelineComponent},
  {path: ':story', redirectTo: ':story/timeline'},
  {path: '', component: StoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {
}
