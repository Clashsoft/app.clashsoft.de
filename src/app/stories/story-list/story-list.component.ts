import {Component, OnInit} from '@angular/core';
import {Story} from '../model/story';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [
    {
      _id: '0',
      title: 'The Grand Plan',
      description: 'The heroes go to a hidden village in the Peruan mountains, where they face a dangerous',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
