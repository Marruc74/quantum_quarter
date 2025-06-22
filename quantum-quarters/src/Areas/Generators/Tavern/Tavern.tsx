import { useState } from "react";
import nameParts from "./Data/NameParts.json";
import { TavernNameTypes, type TavernNameType } from "./Utils/TavernHelpers";

// Use a regular function for random
function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Tavern = () => {
  const [tavernName, setTavernName] = useState<string>("");

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
  };

  return (
    <div>
      <button onClick={onGenerate}>Generate</button>
      <div>{tavernName}</div>
    </div>
  );
};

export default Tavern;
