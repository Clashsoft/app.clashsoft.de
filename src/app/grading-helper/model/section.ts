import {Item} from './item';

export class Section {
  title: string;
  points: number;
  maxPoints: number;
  items: Item[];
  children: Section[];
}
