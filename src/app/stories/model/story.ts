export interface Story {
  _id: string;
  title: string;
  description: string;
}

export type CreateStoryDto = Omit<Story, '_id'>;

export type UpdateStoryDto = Partial<CreateStoryDto>;
