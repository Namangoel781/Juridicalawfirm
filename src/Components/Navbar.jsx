import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo-2.png";

import "./Navbar.css";

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav color when scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // change nav on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/people" onClick={closeMenu}>
              People
            </a>
          </li>
          <li className="nav-item">
            <a href="/practice-area" onClick={closeMenu}>
              Practice Areas
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={closeMenu}>
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
