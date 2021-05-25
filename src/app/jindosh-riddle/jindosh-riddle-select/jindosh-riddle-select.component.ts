import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as Constants from '../jindosh-riddle.constants';

@Component({
  selector: 'app-jindosh-riddle-select',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class JindoshRiddleSelectComponent {
  @Input() placeholder: string;
  @Input() options: string[];

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
}

@Component({
  selector: 'app-character',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class CharacterComponent extends JindoshRiddleSelectComponent {
  options = Constants.names;
  placeholder = 'Character';
}

@Component({
  selector: 'app-city',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class CityComponent extends JindoshRiddleSelectComponent {
  options = Constants.cities;
  placeholder = 'City';
}

@Component({
  selector: 'app-color',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class ColorComponent extends JindoshRiddleSelectComponent {
  options = Constants.colors;
  placeholder = 'Color';
}

@Component({
  selector: 'app-drink',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class DrinkComponent extends JindoshRiddleSelectComponent {
  options = Constants.drinks;
  placeholder = 'Drink';
}

@Component({
  selector: 'app-heirloom',
  templateUrl: 'jindosh-riddle-select.component.html',
})
export class HeirloomComponent extends JindoshRiddleSelectComponent {
  options = Constants.heirlooms;
  placeholder = 'Heirloom';
}
