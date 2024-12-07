// Favorites.js
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getFromLocalStorage, saveToLocalStorage } from "./LocalStorage";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFromLocalStorage("favorites") || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    saveToLocalStorage("favorites", updatedFavorites);
  };

  return (
    <div>
      <h1>Mis Pokémon Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes Pokémon en favoritos.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favorites.map(pokemon => (
            <div key={pokemon.id} style={{ margin: "1rem" }}>
              <PokemonCard pokemon={pokemon} />
              <button
                onClick={() => handleRemoveFromFavorites(pokemon.id)}
                style={{ marginTop: "0.5rem", backgroundColor: "#ff0000", color: "#fff", border: "none", padding: "0.5rem", cursor: "pointer" }}
              >
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
