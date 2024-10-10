import React from "react";

interface Character {
  name: string;
  nickName?: string;
  skillset: string[];
  votes: number;
}

interface CharacterRowProps {
  character: Character;
  index: number;
}

const CharacterRow: React.FC<CharacterRowProps> = ({ character, index }) => (
  <tr className={index % 2 === 0 ? "light" : "dark"}>
    <td>
      {character.nickName
        ? `${character.name} "${character.nickName}"`
        : character.name}
    </td>
    <td>{character.skillset.join(", ")}</td>
    <td>{character.votes}</td>
  </tr>
);

export default CharacterRow;
export type { Character, CharacterRowProps };
