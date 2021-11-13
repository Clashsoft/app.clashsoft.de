import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryTrackerRoutingModule } from './story-tracker-routing.module';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    StoryTrackerRoutingModule
  ]
})
export class StoryTrackerModule { }
