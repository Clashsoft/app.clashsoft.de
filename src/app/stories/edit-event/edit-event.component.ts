import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event, Reference} from '../model/event';
import {Entry} from '../model/entry';
import {COLORS} from '../model/constants';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  @Input() event?: Event;
  @Input() timeline?: Event[];
  @Input() entries!: Entry[];
  @Output() done = new EventEmitter<void>();

  readonly colors = COLORS;

  date = new Date().toISOString().substring(0, 10);
  time = '12:00';
  description = '';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    if (!this.event) {
      return;
    }

    const timestamp = typeof this.event.timestamp === 'string' ? this.event.timestamp : this.event.timestamp.toISOString();
    this.date = timestamp.substring(0, 10);
    this.time = timestamp.substring(11, 23);
    this.description = this.event.description.map(r => {
      if (typeof r === 'string') {
        return r;
      }
      return this.render(r.type, r.id, r.name);
    }).join(' ');
  }

  updateTags() {
    const newText = this.description.replace(/\[\[(.*?)(?:\|(.*?))?]]/g, (text, fullName, name) => {
      const entry = this.entries.find(e => e.name === fullName);
      if (!entry) {
        return text;
      }

      return this.render(entry.type, entry._id, name || fullName);
    });

    if (newText === this.description) {
      return;
    }

    this.description = newText;

    setTimeout(() => {
      const selection = window.getSelection();
      const editor = document.getElementById('description-editor');
      if (selection && editor) {
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  }

  private render(type: string, id: string, name: string) {
    const cssClass = this.colors[type] || 'secondary';
    return `<span contenteditable="false" class="alert alert-${cssClass} p-0" data-reference="${type}" data-id="${id}">${name}</span>`;
  }

  save() {
    const description = this.buildDescription();
    const timestamp = new Date(this.date + ' ' + this.time);

    if (this.event) {
      this.eventService.update(this.event.story, this.event._id, {
        description,
        timestamp,
      }).subscribe(() => {
        this.event!.description = description;
        this.event!.timestamp = timestamp;
        this.done.emit();
      });
      return;
    }

    this.eventService.create(this.route.snapshot.params.story, {
      timestamp,
      description,
    }).subscribe(event => {
      if (!this.timeline) {
        this.done.emit();
        return;
      }

      const index = this.timeline.findIndex(e => e.timestamp > event.timestamp);
      if (index < 0) {
        this.timeline.push(event);
      } else {
        this.timeline.splice(index, 0, event);
      }

      this.done.emit();
    });
  }

  private buildDescription() {
    const description: (string | Reference)[] = [];
    const editor = document.getElementById('description-editor');
    editor!.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        description.push(node.textContent!);
      } else if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
        const {reference, id} = node.dataset;
        if (!reference || !id) {
          description.push(node.innerText);
          return;
        }

        const name = node.textContent;
        description.push({
          type: reference as any,
          id: id!,
          name: name!,
        });
      }
    });
    return description;
  }
}
