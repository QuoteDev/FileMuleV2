// app/components/navbar.js
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLogoBar">{
      /* Logo */
      <img src="images/FileMule-White_Logo.png" alt="Logo" className="navbarLogo" />
        }

      </div>
      <div className="navbarButtonContainer">
        <button className="navButton" color="primary">
          HOME
        </button>
        <button className="navButton" color="primary">
          ABOUT
        </button>
        <button className="navButton" color="primary">
          PRICING
        </button>
        <button className="navButton" color="primary">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Navbar;
