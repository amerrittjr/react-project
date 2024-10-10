import React from "react";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => (
  <div className="card">
    <div className="card-titles">
      <h3>{character.name}</h3>
      {character.nickName && <h4>{character.nickName}</h4>}
    </div>
    <img src={character.imageUrl} alt={character.name} />
    <p>{character.background}</p>
  </div>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickName: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
