import { navItems } from "../data";
import "./Navbar.css";

// The navbar at the very top of the page.
// It gets told which section is currently active (so it can highlight the
// matching link) and a function to call when a link is clicked.
// While the page is at the very top it stays transparent over the hero, and
// gets a solid background once the user scrolls (`scrolled`).
function Navbar({ activeSection, onNavClick, scrolled }) {
  return (
    <header className={"navbar" + (scrolled ? " navbar-scrolled" : "")}>
      <div className="navbar-wrapper">
        <button className="navbar-logo" onClick={() => onNavClick("about")}>
          Kareem<span className="navbar-logo-dot">.</span>
        </button>

        <nav className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={
                "navbar-link" +
                (activeSection === item.id ? " navbar-link-active" : "")
              }
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          className="navbar-resume"
          href="/Kareem-Drammeh-CV-PAGE.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW MY RESUME
        </a>

        {/*
       USE LATER FOR TOGGLE LIGHT/DARK MODE. NEEDS FIXES
       <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>*/}
      </div>
    </header>
  );
}

export default Navbar;
