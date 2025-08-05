// src/pages/ComingSoon.js

import React from "react";
import { Link } from "react-router-dom";
import "./ComingSoon.css";

const ComingSoon = ({ plant }) => {
  return (
    <div className="coming-soon-container">
      <h1>{plant} Disease Detection</h1>
      <p className="coming-soon-message">Coming Soon!</p>
      <Link to="/" className="home-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
