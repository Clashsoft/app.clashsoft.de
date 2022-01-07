import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoriesRoutingModule} from './stories-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {FormsModule} from '@angular/forms';
import {NgbNavModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { StoryListComponent } from './story-list/story-list.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { StoryComponent } from './story/story.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { EntryComponent } from './entry/entry.component';
import { EditEventComponent } from './edit-event/edit-event.component';


@NgModule({
  declarations: [
    TimelineComponent,
    StoryListComponent,
    EditStoryComponent,
    StoryComponent,
    EntryListComponent,
    EditEntryComponent,
    EntryComponent,
    EditEventComponent,
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    FormsModule,
    ContenteditableModule,
    NgbTypeaheadModule,
    NgbNavModule,
  ],
})
export class StoriesModule {
}
