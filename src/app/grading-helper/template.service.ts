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
      maxPoints: 0,
      items: [],
      children: [],
    };
    const parents = [result];

    for (const line of template.split('\n')) {
      const sectionHeader = /^(#+)(.*)\(xP\/(\d+)P\)$/.exec(line);
      if (sectionHeader) {
        const level = sectionHeader[1].length;
        const maxPoints = +sectionHeader[3];
        const section: Section = {
          title: sectionHeader[2].trim(),
          points: maxPoints,
          maxPoints,
          children: [],
          items: [],
        };
        while (level < parents.length) {
          parents.pop();
        }
        parents[level - 1].children.push(section);
        parents[level] = section;
      }

      const listItem = /^[+-](.*)\(([+-]?\d+)P\)$/.exec(line);
      if (listItem) {
        const item: Item = {
          description: listItem[1].trim(),
          points: +listItem[2],
        }
        parents[parents.length - 1].items.push(item);
      }
    }
    return result;
  }

  copy(section: Section): Section {
    return {
      title: section.title,
      points: section.points,
      maxPoints: section.maxPoints,
      children: section.children.map(child => this.copy(child)),
      items: section.items.map(item => ({
        description: item.description,
        points: item.points,
        checked: item.checked,
      })),
    };
  }

  render(section: Section, depth = 0): string {
    let result = '';
    if (section.title && depth) {
      result = `${'#'.repeat(depth)} ${section.title} (${section.points}P/${section.maxPoints}P)\n`;
    }
    for (const item of section.items) {
      if (item.checked) {
        result += `- ${item.description} (${item.points}P)\n`;
      }
    }
    for (const child of section.children) {
      result += this.render(child, depth + 1);
    }
    return result;
  }
}
