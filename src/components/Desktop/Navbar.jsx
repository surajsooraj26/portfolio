import "./Navbar.css";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/portfolio/">My Portfolio</a>
      </div>
      <div className="right_section">
        <div className="links">
          <ul className="navbar__links">
            <li>
              <a href="/portfolio/about">About</a>
            </li>
            <li>
              <a href="/portfolio/projects">Projects</a>
            </li>
            <li>
              <a href="/portfolio/skills">Skills</a>
            </li>

            <li>
              <a href="/portfolio/contact">Contact</a>
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
