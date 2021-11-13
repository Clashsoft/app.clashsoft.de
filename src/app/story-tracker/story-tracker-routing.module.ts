import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';

const routes: Routes = [
  {path: 'timeline', component: TimelineComponent},
  {path: '', pathMatch: 'full', redirectTo: 'timeline'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryTrackerRoutingModule {
}
