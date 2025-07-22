import {Component, OnInit} from '@angular/core';
import {Story} from '../model/story';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  standalone: false,
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];

  constructor(
    private storyService: StoryService,
  ) {
  }

  ngOnInit(): void {
    this.storyService.getAll().subscribe(stories => {
      this.stories = stories;
    });
  }

}
