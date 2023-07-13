import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {BsCart} from "react-icons/bs";
import {AiOutlineUser, AiOutlineHome} from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";
import "./Navbar.css";
import logo from "./../Images/Logo.jpg";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <div className="container" div align="center">

      <div className="logo">
        <a href="/"> <img src={logo} alt="ethereal logo" /></a>
      </div>

      <nav ref={navRef}>  
        <a href="/"><AiOutlineHome/>&nbsp;Home </a>
        <a href="/products">Products&nbsp;<RiArrowDropDownLine/></a>
        <a href="/contact">Contact Us</a>
        <a href="/cart"><BsCart/>&nbsp;Cart</a>
        <a href="/login"><AiOutlineUser/>&nbsp;Login</a>
        

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      
    </div>
  );
};
