import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
})
export class AppCardComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() wip?: boolean;
  @Input() color: string;

  @HostBinding('class') hostClass = 'card';
}
