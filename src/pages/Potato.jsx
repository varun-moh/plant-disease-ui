// src/pages/Potato.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Potato.css";

const Potato = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handleInputChange = (event) => {
    handleFileChange(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select or drop an image first!");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const response = await fetch("${import.meta.env.VITE_API_URL}/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detector-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <div className="main-content">
        <h1>Potato Disease Detector 🥔</h1>
        <form onSubmit={handleSubmit}>
          <div
            className={`drop-zone ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p>Drag & Drop an image here or</p>
            <input
              type="file"
              onChange={handleInputChange}
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput" className="file-label">
              Browse Files
            </label>
          </div>
          <button type="submit" disabled={loading || !selectedFile}>
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>
        {loading && <div className="loader"></div>}
        {preview && !loading && (
          <div className="preview">
            <img src={preview} alt="Selected" />
          </div>
        )}
        {prediction && !loading && (
          <div className="prediction">
            <h2>Prediction Results</h2>
            <p>
              <strong>Class:</strong> {prediction.class}
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {(prediction.confidence * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Potato;
