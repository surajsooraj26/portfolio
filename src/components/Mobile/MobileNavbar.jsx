import "./MobileNavbar.css";
import { useNavbar } from "../../context/NavbarContext";
import { NavLink, Link } from "react-router-dom";


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
        <ul className="mobile-nav-links">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={() => setShowNavbar(false)}
      end
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={() => setShowNavbar(false)}
    >
      About
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/projects"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={() => setShowNavbar(false)}
    >
      Projects
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/skills"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={() => setShowNavbar(false)}
    >
      Skills
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={() => setShowNavbar(false)}
    >
      Contact
    </NavLink>
  </li>
</ul>
      </div>
    </>
  );
}

export default MobileNavbar;
