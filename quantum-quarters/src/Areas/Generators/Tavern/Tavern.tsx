import { useState } from "react";
import nameParts from "./Data/NameParts.json";

const Tavern = () => {
  const [tavernName, setTavernName] = useState<string>("");
  const theme = ""; // You can change this to filter by different themes

  const getRandomPart = (
    parts: {
      text: string;
      tags: string[];
    }[],
    theme: string
  ) => {
    const filtered = theme
      ? parts.filter((part) => part.tags.includes(theme))
      : parts;
    return filtered[Math.floor(Math.random() * filtered.length)]?.text || "";
  };

  const onGenerate = () => {
    const prefix = getRandomPart(nameParts.prefixes, theme);
    const noun = getRandomPart(nameParts.coreNouns, theme);
    const suffix = getRandomPart(nameParts.suffixes, theme);
    setTavernName(`${prefix} ${noun} ${suffix}`.replace(/\s+/g, " ").trim());
  };
  return (
    <div>
      <button onClick={onGenerate}>Generate</button>
      <div>{tavernName}</div>
    </div>
  );
};

export default Tavern;
