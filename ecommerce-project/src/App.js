import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Search } from "./Components/Search";
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Portfolio } from './Pages/Portfolio';
/* page routing and components exported here (to be visible in every page)*/ 
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Search/>
      <Routes>
        
        <Route path ="/" element={<Home/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/portfolio" element={<Portfolio/>}/>
      </Routes>

      </div>
  );
}

export default App;
