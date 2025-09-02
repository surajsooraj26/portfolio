import "./MobileNavbar.css";
import { useState } from "react";
import { useNavbar } from "../../context/NavbarContext";

function MobileNavbar() {
  const [showNavbar, setShowNavbar] = useNavbar();

  return (
    <>
      <nav className="mobile-navbar">
        <h1>Portfolio</h1>
        <div
          className="hamburger-menu"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className={`slide-in ${showNavbar ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
