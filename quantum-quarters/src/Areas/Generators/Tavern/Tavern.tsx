import { useState } from "react";
import nameParts from "./Data/NameParts.json";
import styleParts from "./Data/StyleParts.json";
import interiorParts from "./Data/Interior.json";
import { TavernNameTypes, type TavernNameType } from "./Utils/TavernHelpers";
import { TavernStyleTypes, type TavernStyleType } from "./Utils/TavernHelpers";
import { InteriorTypes, type InteriorType } from "./Utils/TavernHelpers";

// Use a regular function for random
function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Tavern = () => {
  const [tavernName, setTavernName] = useState<string>("");
  const [tavernStyle, setTavernStyle] = useState<string>("");
  const [walls, setWalls] = useState<string>("");
  const [furniture, setFurniture] = useState<string>("");
  const [lighting, setLighting] = useState<string>("");
  const [scents, setScents] = useState<string>("");
  const [specialFeatures, setSpecialFeatures] = useState<string>("");

  const generateTavernStyle = (type: TavernStyleType) => {
    switch (type) {
      case "adj_culture_type":
        return `${random(styleParts.adjectives)} ${random(
          styleParts.cultures
        )} ${random(styleParts.types)}`;
      case "desc_theme_type":
        return `${random(styleParts.adjectives)} ${random(
          styleParts.themes
        )} ${random(styleParts.types)}`;
      case "atmosphere_type":
        return `${random(styleParts.adjectives)} ${random(styleParts.types)}`;
      case "location_type":
        return `${random(styleParts.locations)} ${random(styleParts.types)}`;
      case "material_type":
        return `${random(styleParts.materials)} ${random(styleParts.types)}`;
      default:
        return "";
    }
  };

  const generateTavernName = (type: TavernNameType) => {
    switch (type) {
      case "adjective_noun":
        return `The ${random(nameParts.adjectives)} ${random(nameParts.nouns)}`;
      case "noun_noun":
        return `${random(nameParts.nouns)} & ${random(nameParts.nouns)}`;
      case "color_animal":
        return `The ${random(nameParts.colors)} ${random(nameParts.animals)}`;
      case "verbing_creature":
        return `The ${random(nameParts.verbs)} ${random(nameParts.animals)}`;
      case "title_name":
        return `${random(nameParts.titles)} ${random(
          nameParts.names
        )}'s ${random(["Tavern", "Inn", "Rest"])}`;
      case "mythical_location":
        return `The ${random(nameParts.locations)}`;
      case "pun":
        return random(nameParts.punNames);
      default:
        return "";
    }
  };

  const onGenerate = () => {
    const randomType = random([...TavernNameTypes]) as TavernNameType;
    setTavernName(generateTavernName(randomType));
    const randomStyle = random([...TavernStyleTypes]) as TavernStyleType;
    setTavernStyle(generateTavernStyle(randomStyle));
    setWalls(random(interiorParts.walls));
    setFurniture(random(interiorParts.furniture));
    setLighting(random(interiorParts.lighting));
    setScents(random(interiorParts.scents));
    setSpecialFeatures(random(interiorParts.specialFeatures));
  };

  return (
    <div>
      <button onClick={onGenerate}>Generate</button>
      <div>{tavernName}</div>
      <div>{tavernStyle}</div>
      <div>Walls: {walls}</div>
      <div>Furniture: {furniture}</div>
      <div>Lighting: {lighting}</div>
      <div>Scents: {scents}</div>
      <div>Special Features: {specialFeatures}</div>
    </div>
  );
};

export default Tavern;
