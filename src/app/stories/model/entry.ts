export interface Entry {
  _id: string;
  type: string;
  name: string;
  imageUrl?: string;
  description: string;
  properties: Record<string, any>;
}

export type CreateEntryDto = Omit<Entry, '_id'>;

export type UpdateEntryDto = Partial<Entry>;
