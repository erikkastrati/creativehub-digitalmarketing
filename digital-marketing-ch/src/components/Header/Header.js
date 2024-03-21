import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar__logo" src="logo.png" alt="Logo" />
      </div>
      <div className="navbar__right">
        <ul className="navbar__nav-items">
          <li className="navbar__nav-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#">About</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#">Services</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
