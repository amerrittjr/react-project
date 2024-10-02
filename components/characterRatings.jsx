import React from "react";
import "../styles/character-rating.css";
import PropTypes from "prop-types";

const CharacterRatings = ({ characters }) => {
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
            <tr
              key={character.name}
              className={index % 2 === 0 ? "light" : "dark"}
            >
              <td>
                {character.nickName
                  ? `${character.name} "${character.nickName}"`
                  : character.name}
              </td>
              <td>{character.skillset.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

CharacterRatings.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nickName: PropTypes.string,
      skillset: PropTypes.arrayOf(PropTypes.string).isRequired,
      votes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CharacterRatings;
