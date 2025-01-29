import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from "./Experience"; // Import your Experience page
import Home from "./Home"; // Example Home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;