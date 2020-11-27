import {Effect} from './effect';

export class PlayEvent {
  id: number;
  timestamp: Date;
  user: string;
  effect: Effect;
}
