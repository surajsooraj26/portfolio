import "./Navbar.css";
import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <h1 className="logo">My Portfolio</h1>
        </NavLink>
      </div>
      <div className="right_section">
        <div className="links">
          <ul className="navbar__links">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="left_section">
          <a
            href="https://drive.google.com/uc?id=1yPtqyelOE5tK1K9Zg663LX6_UzuUl40y&export=download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume_button">
              <FaDownload />
              &nbsp; Resume
            </button>
          </a>

          <div className="profile">
            <img src="profile.jpg" loading="lazy" alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
