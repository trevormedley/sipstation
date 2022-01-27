import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Social from "./Pages/Social";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useState, useEffect } from "react";
import { auth } from "./firebase-config";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
