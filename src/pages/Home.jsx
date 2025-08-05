// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Plant Disease Detector</h1>
      <p className="home-subtitle">Select a plant to begin detection</p>
      <div className="plant-selection">
        <Link to="/potato" className="plant-card potato">
          <h2>Potato 🥔</h2>
        </Link>
        <Link to="/tomato" className="plant-card tomato">
          <h2>Tomato 🍅</h2>
        </Link>
        <Link to="/ladies-finger" className="plant-card ladies-finger">
          <h2>Ladies' Finger 🌱</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
