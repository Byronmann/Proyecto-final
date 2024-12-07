// PokemonCard.js
import React from "react";
import { saveToLocalStorage, getFromLocalStorage } from "./LocalStorage";

const PokemonCard = ({ pokemon }) => {
  const handleAddToFavorites = () => {
    const favorites = getFromLocalStorage("favorites") || [];
    if (favorites.some(fav => fav.id === pokemon.id)) {
      alert(`${pokemon.name} ya está en favoritos.`);
      return;
    }
    saveToLocalStorage("favorites", [...favorites, pokemon]);
    alert(`${pokemon.name} ha sido agregado a favoritos.`);
  };

  return (
    <div className="pokemon-card" style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", margin: "1rem", width: "200px" }}>
      <div className="card-header">
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
        <p>Type: {pokemon.types.map(type => type.type.name).join(", ")}</p>
      </div>
      <div className="card-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: "100px" }} />
      </div>
      <div className="card-info">
        <p>NO. {pokemon.id} HT: {pokemon.height} WT: {pokemon.weight}</p>
        <button onClick={handleAddToFavorites} style={{ marginTop: "1rem" }}>Agregar a Favoritos</button>
      </div>
    </div>
  );
};

export default PokemonCard;
