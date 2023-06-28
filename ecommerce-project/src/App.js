import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Search } from "./Components/Search";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
/* page routing and components exported here (to be visible in every page)*/
// testing push, new account klint
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="search-container">
        <Search />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
