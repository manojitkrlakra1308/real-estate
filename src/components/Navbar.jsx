import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo_img.png";

const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar-main flex font-serif">
        <div className="logo-image">
          <a href="/">
            <img src={logo} alt="image" className="logo" />
          </a>
        </div>
        <div className="nav-options">
          <a href="/">Home</a>
          <a href="#">Contact</a>
          <a href="#">Follow Us</a>
          <a href="#">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
