export interface Reference {
  type: 'character' | 'item' | 'location';
  id: string;
  name: string;
}

export interface Event {
  story: string;
  _id: string;
  timestamp: Date | string;
  description: (string | Reference)[];
}

export type CreateEventDto = Omit<Event, '_id' | 'story'>;

export type UpdateEventDto = Partial<CreateEventDto>;
