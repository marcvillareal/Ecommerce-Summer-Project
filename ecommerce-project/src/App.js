import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Portfolio } from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/portfolio" element={<Portfolio/>}/>
      </Routes>
      
      <h1>Dee InkFlow</h1>
      </div>
  );
}

export default App;
