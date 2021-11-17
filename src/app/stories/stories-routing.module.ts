import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {StoryListComponent} from './story-list/story-list.component';

const routes: Routes = [
  {path: 'timeline', component: TimelineComponent},
  {path: '', component: StoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {
}
