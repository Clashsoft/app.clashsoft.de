import {Effect} from './effect';

export interface PlayEvent {
  id: number;
  timestamp: Date;
  user: string;
  effect: Effect;
}
