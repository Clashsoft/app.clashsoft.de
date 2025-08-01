import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
  standalone: false,
})
export class AppCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() wip?: boolean;
  @Input() color!: string;
}
