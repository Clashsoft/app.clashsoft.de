import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoryTrackerRoutingModule} from './story-tracker-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    StoryTrackerRoutingModule,
    FormsModule,
    ContenteditableModule,
  ],
})
export class StoryTrackerModule {
}
