import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JindoshRiddleComponent} from './jindosh-riddle.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';
import {
  CharacterComponent,
  CityComponent,
  ColorComponent,
  DrinkComponent,
  HeirloomComponent,
  JindoshRiddleSelectComponent,
} from './jindosh-riddle-select.component';


@NgModule({
  declarations: [
    JindoshRiddleComponent,
    JindoshRiddleSelectComponent,
    CharacterComponent,
    CityComponent,
    ColorComponent,
    DrinkComponent,
    HeirloomComponent,
  ],
  imports: [
    CommonModule,
    NgBootstrapDarkmodeModule,
  ],
})
export class JindoshRiddleModule {
}
