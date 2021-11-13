import { Component, OnInit } from '@angular/core';
import {Event, Reference} from '../model/event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline: Event[] = [
    {
      timestamp: new Date(),
      description: [
        {type: 'character', id: '0', name: 'Testus'},
        'gives the',
        {type: 'item', id: '1', name: 'Sword of Swiftness'},
        'to',
        {type: 'character', id: '2', name: 'Testina'},
        'at',
        {type: 'location', id: '3', name: 'The Library'},
        '.',
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isReference(item: string | Reference): item is Reference {
    return typeof item !== 'string';
  }
}
