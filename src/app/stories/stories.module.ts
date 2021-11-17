import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoriesRoutingModule} from './stories-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { StoryListComponent } from './story-list/story-list.component';


@NgModule({
  declarations: [
    TimelineComponent,
    StoryListComponent,
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    FormsModule,
    ContenteditableModule,
    NgbTypeaheadModule,
  ],
})
export class StoriesModule {
}
