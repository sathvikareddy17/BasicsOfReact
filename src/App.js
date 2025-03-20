import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import SearchBar from "./Components/SearchBar";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Settings from "./Components/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Sidebar on the Left */}
        <Sidebar />

        {/* Middle Section that Changes Based on Navigation */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Form />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        {/* Search Bar on the Right */}
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
