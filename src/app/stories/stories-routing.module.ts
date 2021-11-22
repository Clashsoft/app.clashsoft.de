import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {StoryListComponent} from './story-list/story-list.component';
import {EditStoryComponent} from './edit-story/edit-story.component';
import {StoryComponent} from './story/story.component';
import {EntryListComponent} from './entry-list/entry-list.component';
import {EditEntryComponent} from './edit-entry/edit-entry.component';
import {EntryComponent} from './entry/entry.component';

const routes: Routes = [
  {path: ':story/entries/new', component: EditEntryComponent},
  {path: ':story/entries/:entry', component: EntryComponent},
  {path: ':story/entries/:entry/edit', component: EditEntryComponent},
  {path: 'new', component: EditStoryComponent},
  {
    path: ':story',
    component: StoryComponent,
    children: [
      {path: 'timeline', component: TimelineComponent, data: {title: 'Timeline'}},
      {path: 'entries', component: EntryListComponent, data: {title: 'Entries'}},
      {path: 'edit', component: EditStoryComponent, data: {title: 'Settings'}},
      {path: '', redirectTo: 'timeline'},
    ],
  },
  {path: '', component: StoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {
}
