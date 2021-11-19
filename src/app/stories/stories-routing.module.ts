import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {StoryListComponent} from './story-list/story-list.component';
import {EditStoryComponent} from './edit-story/edit-story.component';
import {StoryComponent} from './story/story.component';
import {EntryListComponent} from './entry-list/entry-list.component';

const routes: Routes = [
  {
    path: ':story',
    component: StoryComponent,
    children: [
      {path: 'timeline', component: TimelineComponent, data: {title: 'Timeline'}},
      {path: 'edit', component: EditStoryComponent, data: {title: 'Settings'}},
      {path: 'entries', component: EntryListComponent, data: {title: 'Entries'}},
    ],
  },
  {path: 'new', component: EditStoryComponent},
  {path: ':story', redirectTo: ':story/timeline'},
  {path: '', component: StoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {
}
