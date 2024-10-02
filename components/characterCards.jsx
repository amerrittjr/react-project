// CharacterCards.jsx
import React from "react";
import "../styles/character-cards.css";
import PropTypes from "prop-types";

const CharacterCards = ({ characters }) => {
  return (
    <section id="character-cards">
      {characters.map((character) => (
        <div className="card" key={character.name}>
          <div className="card-titles">
            <h3>{character.name}</h3>
            {character.nickName && <h4>{character.nickName}</h4>}
          </div>
          <img src={character.imageUrl} alt={character.name} />
          <p>{character.background}</p>
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
