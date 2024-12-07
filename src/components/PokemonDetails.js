// PokemonDetails.js
import React from "react";

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <h2>Detalles de {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <p>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetails;
