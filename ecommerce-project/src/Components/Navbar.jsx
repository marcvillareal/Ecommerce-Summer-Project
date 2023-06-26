import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from './../Images/Logo.jpg';


export const Navbar = () => {
    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive");
    }
    return (
        <div className="container">
            <div className="logo"><a href ="/"><img src={logo} alt="ethereal logo"/></a>
            </div>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/contact">Contact Us</a>
                <a href="/portfolio">Portfolio</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
            </button>
            
        </div>
    )
};