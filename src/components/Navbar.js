// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#ffcb05", display: "flex", justifyContent: "space-between" }}>
      <h1>Pokédex</h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
