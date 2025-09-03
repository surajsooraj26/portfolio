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
          <li>
            <a href="/portfolio/">Home</a>
          </li>
          <li>
            <Link to="/projects" onClick={() => setShowNavbar(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setShowNavbar(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setShowNavbar(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
