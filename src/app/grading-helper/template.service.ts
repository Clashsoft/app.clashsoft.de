import {Injectable} from '@angular/core';
import {Section} from './model/section';
import {Item} from './model/item';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {

  constructor() {
  }

  get savedTemplate(): string {
    return localStorage.getItem('grading-helper/template') || '';
  }

  set savedTemplate(value: string) {
    localStorage.setItem('grading-helper/template', value);
  }

  parse(template: string): Section {
    const result: Section = {
      title: '',
      points: 0,
      items: [],
      children: [],
    };
    const parents = [result];

    for (const line of template.split('\n')) {
      const sectionHeader = /^(#+)(.*)\(xP\/(\d+)P\)$/.exec(line);
      if (sectionHeader) {
        const level = sectionHeader[1].length;
        const section: Section = {
          title: sectionHeader[2],
          points: +sectionHeader[3],
          children: [],
          items: [],
        };
        while (level < parents.length) {
          parents.pop();
        }
        parents[level - 1].children.push(section);
        parents[level] = section;
      }

      const listItem = /^[+-](.*)\(-(\d+)P\)$/.exec(line);
      if (listItem) {
        const item: Item = {
          description: listItem[1],
          points: +listItem[2],
        }
        parents[parents.length - 1].items.push(item);
      }
    }
    return result;
  }
}
