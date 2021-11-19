export const TYPES = [
  'Character',
  'Location',
  'Item',
] as const;

export const COLORS: Record<(typeof TYPES)[number] | string, string> = {
  Character: 'primary',
  Item: 'warning',
  Location: 'success',
};
