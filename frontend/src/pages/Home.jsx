import React, { useEffect } from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home-container" style={{ padding: "20px" }}>
      {" "}
      {/* Dodajemo inline style za vizualnu potvrdu */}
      <h1>Dobrodošli u Camp Admin Dashboard</h1>
      <p>Upravljajte svojim kampom s lakoćom</p>
      <ul>
        <li>Pregledajte rezervacije</li>
        <li>Upravljajte smještajnim jedinicama</li>
        <li>Pratite popunjenost kampa</li>
        <li>Analizirajte podatke o poslovanju</li>
      </ul>
    </div>
  );
};

export default Home;
