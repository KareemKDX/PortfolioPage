import { useState } from "react";
import { navItems } from "../data";
import "./Navbar.css";

// The navbar at the very top of the page.
// It gets told which section is currently active (so it can highlight the
// matching link) and a function to call when a link is clicked.
// While the page is at the very top it stays transparent over the hero, and
// gets a solid background once the user scrolls (`scrolled`).
function Navbar({ activeSection, onNavClick, scrolled }) {
  // Whether the mobile dropdown menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={"navbar" + (scrolled ? " navbar-scrolled" : "")}>
      <div className="navbar-wrapper">
        {/* Only shown on small screens, where the normal links are hidden. */}
        <div className="navbar-menu">
          <button
            className="navbar-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {menuOpen && (
            <nav className="navbar-menu-dropdown">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={
                    "navbar-link" +
                    (activeSection === item.id ? " navbar-link-active" : "")
                  }
                  onClick={() => {
                    onNavClick(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>

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
          href={import.meta.env.BASE_URL + "Kareem-Drammeh-CV-PAGE.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW MY RESUME
        </a>

        {/*
       USE LATER FOR TOGGLE LIGHT/DARK MODE. NEEDS FIXES
       RIGHT NOW INDEX.HTML SETS DARK MODE AS DEFAULT
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
