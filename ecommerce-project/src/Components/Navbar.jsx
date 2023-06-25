import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";


export const Navbar = () => {
    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive");
    }
    return (
        <div className="container">
            <h1>Dee InkFlow</h1>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/contact">ContactUs</a>
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