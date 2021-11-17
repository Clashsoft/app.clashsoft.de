export interface Reference {
  type: 'character' | 'item' | 'location';
  id: string;
  name: string;
}

export interface Event {
  _id: string;
  timestamp: Date;
  description: (string | Reference)[];
}

export type CreateEventDto = Omit<Event, '_id'>;
