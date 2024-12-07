// PokemonList.js
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async (query) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    try {
      setError(null);
      setPokemon(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Pokémon no encontrado.");
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchPokemon(query);
    else setError("Por favor, ingrese un nombre o ID válido.");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Busca un Pokémon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default PokemonList;
