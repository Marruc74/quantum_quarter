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

export const TavernStyleTypes = [
  "adj_culture_type",
  "desc_theme_type",
  "atmosphere_type",
  "location_type",
  "material_type",
] as const;

export type TavernStyleType = (typeof TavernStyleTypes)[number];

export const InteriorTypes = [
  "walls",
  "furniture",
  "lighting",
  "scents",
  "specialFeatures",
] as const;

export type InteriorType = (typeof InteriorTypes)[number];
