import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoryService} from '../story.service';
import {switchMap} from 'rxjs/operators';
import {Story} from '../model/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  standalone: false,
})
export class StoryComponent implements OnInit {
  story?: Story;

  constructor(
    private storyService: StoryService,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story}) => this.storyService.get(story)),
    ).subscribe(story => {
      this.story = story;
    });
  }

}
