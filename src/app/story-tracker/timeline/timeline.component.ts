import {Component, OnInit} from '@angular/core';
import {Event, Reference} from '../model/event';

const testus: Reference = {type: 'character', id: '0', name: 'Testus'};
const sword: Reference = {type: 'item', id: '1', name: 'Sword of Swiftness'};
const testina: Reference = {type: 'character', id: '2', name: 'Testina'};
const library: Reference = {type: 'location', id: '3', name: 'The Library'};

const references = [
  testus,
  sword,
  testina,
  library,
];

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timeline: Event[] = [
    {
      timestamp: new Date(),
      description: [
        testus,
        'gives the',
        sword,
        'to',
        testina,
        'at',
        library,
        '.',
      ],
    },
  ];

  ngOnInit(): void {
  }

  isReference(item: string | Reference): item is Reference {
    return typeof item !== 'string';
  }
}
