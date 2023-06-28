import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export const Search = () => {
  const [input, setInput] = useState("")

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Start typing to find the products you need..." 
      value={input} 
      onChange={(e) => setInput(e.target.value)}/>
    </div>
  );
};
