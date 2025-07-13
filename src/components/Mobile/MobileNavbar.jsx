import "./MobileNavbar.css";
function MobileNavbar() {
  return (
    <nav className="mobile-navbar">
      <h1>Portfolio</h1>
      <div className="hamburger-menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default MobileNavbar;
