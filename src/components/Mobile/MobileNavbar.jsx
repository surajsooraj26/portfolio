import "./MobileNavbar.css";
import { useNavbar } from "../../context/NavbarContext";
import { NavLink, Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCpu } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";



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
  <li >
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      onClick={() => setShowNavbar(false)}
      end
    >
      <BiHomeAlt2 />
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      onClick={() => setShowNavbar(false)}
    >
      <CgProfile />
      About
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/projects"
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      onClick={() => setShowNavbar(false)}
    >
      <RiComputerLine />
      Projects
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/skills"
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      onClick={() => setShowNavbar(false)}
    >
      <BsCpu />
      Skills
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
      onClick={() => setShowNavbar(false)}
    >
      <HiOutlinePhone />
      Contact
    </NavLink>
  </li>
</ul>
      </div>
    </>
  );
}

export default MobileNavbar;
