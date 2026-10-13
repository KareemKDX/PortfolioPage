import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  // True once the user has scrolled a little, so the navbar can switch from
  // transparent (sitting on top of the hero) to a solid background.
  const [scrolled, setScrolled] = useState(false);

  // Start in whatever theme index.html already applied (see the small
  // script in <head> of index.html), so the two stay in sync.
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light",
  );

  // Whenever the theme changes, update the <html> tag and remember the
  // choice in localStorage so it's still applied next time the page loads.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  // useCallback keeps this the same function between re-renders, since
  // Content's IntersectionObserver effect depends on it (see Content.jsx).
  const handleSectionChange = useCallback((id) => {
    setActiveSection(id);
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          activeSection={activeSection}
          onNavClick={scrollToSection}
          theme={theme}
          onToggleTheme={toggleTheme}
          scrolled={scrolled}
        />

        <main>
          <Content
            onSectionChange={handleSectionChange}
            onNavClick={scrollToSection}
          />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
