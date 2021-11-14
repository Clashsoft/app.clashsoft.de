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

  description = '';

  ngOnInit(): void {
  }

  isReference(item: string | Reference): item is Reference {
    return typeof item !== 'string';
  }

  updateTags() {
    const newText = this.description.replace(/\[\[(.*?)(?:\|(.*?))?]]/g, (text, fullName, name) => {
      const reference = references.find(r => r.name === fullName);
      if (!reference) {
        return text;
      }

      const cssClass = {
        character: 'primary',
        item: 'warning',
        location: 'success',
      }[reference.type];
      return `<span contenteditable="false" class="alert alert-${cssClass} p-0" data-id="${reference.id}">${name || fullName}</span>`;
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
}
