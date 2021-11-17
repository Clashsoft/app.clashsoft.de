import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoriesRoutingModule} from './stories-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    FormsModule,
    ContenteditableModule,
  ],
})
export class StoriesModule {
}
