import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateStoryDto, Story} from '../model/story';
import {switchMap} from 'rxjs/operators';
import {StoryService} from '../story.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.scss'],
  standalone: false,
})
export class EditStoryComponent implements OnInit {
  story: Story | CreateStoryDto = {
    title: '',
    description: '',
  };

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story}) => story ? this.storyService.get(story) : of({
        title: '',
        description: '',
      })),
    ).subscribe(story => {
      this.story = story;
    });
  }

  save() {
    const op = '_id' in this.story
      ? this.storyService.update(this.story._id, this.story)
      : this.storyService.create(this.story)
    ;
    op.subscribe(story => {
      this.router.navigate(['/stories', story._id]);
    });
  }
}
