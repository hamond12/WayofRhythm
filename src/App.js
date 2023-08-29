import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import MapListPage from "./pages/MapListPage";
import GuidePage from "./pages/GuidePage";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/map/id/:id" element={<MapListPage />} />
          <Route path="/guide" element={<GuidePage />} />
        </Routes>
      </Router>
    </div>
  );
}
