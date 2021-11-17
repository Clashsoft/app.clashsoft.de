import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoriesRoutingModule} from './stories-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TimelineComponent,
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
