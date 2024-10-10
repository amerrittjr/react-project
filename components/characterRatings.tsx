import React, { Component } from "react";
import CharacterRow, {
  Character,
  CharacterRowProps,
} from "./tableRowComponent";
import "../styles/character-rating.css";

interface CharacterRatingsProps {
  characters: Character[];
}

class CharacterRatings extends Component<CharacterRatingsProps> {
  props: { characters: any };
  render() {
    const { characters } = this.props;
    const topCharacters = [...characters]
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 5);

    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {topCharacters.map((character, index) => (
              <CharacterRow
                key={character.name}
                character={character}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default CharacterRatings;
