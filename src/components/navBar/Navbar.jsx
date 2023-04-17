import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <h1 className="logo">DID</h1>
      <div className="links-container">
      <a href="#about">
        <div className="link">About</div>
      </a>
        {/* <div className="link">Mailing list</div>
        <div className="link">Events</div> */}
      </div>
    </div>
  );
}

export default Navbar;
