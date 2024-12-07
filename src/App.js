import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
