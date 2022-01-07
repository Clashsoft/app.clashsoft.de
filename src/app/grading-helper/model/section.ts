import {Item} from './item';

export interface Section {
  title: string;
  points: number;
  maxPoints: number;
  items: Item[];
  children: Section[];
}
