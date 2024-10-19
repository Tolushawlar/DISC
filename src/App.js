// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DiscPage from "./pages/DiscPage";
import SwotPage from "./pages/SwotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiscPage />} />
        <Route path="/swot" element={<SwotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
