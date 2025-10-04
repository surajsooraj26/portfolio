import "./MobileNavbar.css";
import { useNavbar } from "../../context/NavbarContext";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const [showNavbar, setShowNavbar] = useNavbar();

  return (
    <>
      <nav className="mobile-navbar">
        <a href="/portfolio/">
          <h1>Portfolio</h1>
        </a>
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
          <a href="/portfolio/" onClick={() => setShowNavbar(false)}>
            <li>Home</li>
          </a>
          <a href="/portfolio/about" onClick={() => setShowNavbar(false)}>
            <li>About</li>
          </a>
          <a href="/portfolio/projects" onClick={() => setShowNavbar(false)}>
            <li>Projects</li>
          </a>
          <a href="/portfolio/skills" onClick={() => setShowNavbar(false)}>
            <li>Skills</li>
          </a>
          <a href="/portfolio/contact" onClick={() => setShowNavbar(false)}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
