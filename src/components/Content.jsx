import { useEffect } from "react";
import { navItems } from "../data";
import Home from "./sections/Home";
//import Skills from "./sections/Skills";
//import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AboutMe from "./sections/AboutMe";
import "./Content.css";

// All the sections of the page, stacked top to bottom. The whole window
// scrolls, and while it does we watch which section is currently visible
// and tell App.jsx about it, so the navbar can highlight it.
function Content({ onSectionChange, onNavClick }) {
  useEffect(() => {
    // On every scroll, the active section is the last one whose top has
    // passed 40% of the way down the screen.
    function updateActiveSection() {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      if (sections.length === 0) return;

      // At the very bottom of the page the last sections (like Contact) are
      // often too short to ever reach that line, so pick the last one.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        onSectionChange(sections[sections.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.4;
      let current = sections[0];
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= line) {
          current = section;
        }
      });
      onSectionChange(current.id);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [onSectionChange]);

  return (
    <>
      <Home onNavClick={onNavClick} />

      <AboutMe />
      <Projects />

      {/* INACTIVE LINKS */}
      {/*   <Skills />*/}
      {/* <Experience /> */}
      <Contact />
    </>
  );
}

export default Content;
