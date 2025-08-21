import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">My Portfolio</a>
      </div>
      <div className="right_section">
        <div className="links">
          <ul className="navbar__links">
            <li>
              <a href="/portfolio/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="left_section">
          <button className="resume_button">Resume</button>
          <div className="profile">
            <img src="profile.jpeg" loading="lazy" alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
