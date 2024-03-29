import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//components imported here
import { Navbar } from "./Components/Navbar";
// pages imported here
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
/* page routing and components exported here (to be visible in every page)*/
// testing push, new account klint

function App() {
  return (
    <main className="App">
      <div>
        <div className="nav-bar-container">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
