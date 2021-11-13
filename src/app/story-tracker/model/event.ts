export interface Reference {
  type: 'character' | 'item' | 'location';
  id: string;
  name: string;
}

export interface Event {
  timestamp: Date;
  description: (string | Reference)[];
}
