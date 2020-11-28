import {Item} from './item';

export class Section {
  title: string;
  points: number;
  items: Item[];
  children: Section[];
}
