import React from "react";
import logo from "../../imgs/bluelogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="logo-wrapper">
        <img
          className="logo"
          src={logo}
          alt="logoImg"
          style={{ height: "40px" }}
        />
        <h1 className="logo">DID</h1>
      </div>
      <div className="links-container">
        <a href="#about">
          <div className="link">About</div>
        </a>
        </div>
        <div id="menuToggle" className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Support</li>
            </a>
            <a href="#mailing">
              <li>Connect</li>
            </a>
            <a href="#events">
              <li>Events</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
          </ul>
        </div>
        {/* <div className="hamburger">&#9776;</div> */}
        {/* <div className="link">Mailing list</div>
        <div className="link">Events</div> */}
      
    </div>
  );
}

export default Navbar;
