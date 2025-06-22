export const TavernNameTypes = [
  "adjective_noun",
  "noun_noun",
  "color_animal",
  "verbing_creature",
  "title_name",
  "mythical_location",
  "pun",
] as const;

export type TavernNameType = (typeof TavernNameTypes)[number];
