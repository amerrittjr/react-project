// CharacterCards.jsx
import React from "react";
import "../styles/character-cards.css";
import PropTypes from "prop-types";
import CharacterCard from "./tableColumnComponent";

const CharacterCards = ({ characters }) => {
  return (
    <section id="character-cards">
      {characters.map((character) => (
        <div key={character.name}>
          <CharacterCard character={character} />
        </div>
      ))}
    </section>
  );
};

CharacterCards.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nickName: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterCards;
