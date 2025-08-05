// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Potato from "./pages/Potato";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potato" element={<Potato />} />
        <Route path="/tomato" element={<ComingSoon plant="Tomato" />} />
        <Route
          path="/ladies-finger"
          element={<ComingSoon plant="Ladies' Finger" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
