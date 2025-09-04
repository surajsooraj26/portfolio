import "./MobileNavbar.css";
import { useNavbar } from "../../context/NavbarContext";
import { Link } from "react-router-dom";

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
          <Link to="/" onClick={() => setShowNavbar(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={() => setShowNavbar(false)}>
            <li>About</li>
          </Link>
          <Link to="/projects" onClick={() => setShowNavbar(false)}>
            <li>Projects</li>
          </Link>
          <Link to="/skills" onClick={() => setShowNavbar(false)}>
            <li>Skills</li>
          </Link>
          <Link to="/contact" onClick={() => setShowNavbar(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
