import React from "react";
import "./styles.scss";


function index() {
  return (
    <header className="header-H">
      <img src="./img/logo.png" alt="SportSee Logo" />
      <nav>
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </nav>
    </header>
  );
}

export default index;
