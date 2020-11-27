import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JindoshRiddleComponent} from './jindosh-riddle/jindosh-riddle.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';
import {
  CharacterComponent,
  CityComponent,
  ColorComponent,
  DrinkComponent,
  HeirloomComponent,
  JindoshRiddleSelectComponent,
} from './jindosh-riddle-select/jindosh-riddle-select.component';
import {FormsModule} from '@angular/forms';
import {JindoshRiddleRoutingModule} from './jindosh-riddle-routing.module';


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
    FormsModule,
    JindoshRiddleRoutingModule,
  ],
})
export class JindoshRiddleModule {
}
