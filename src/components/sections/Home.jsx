import { home, profile } from "../../data";

// The first thing a visitor sees: a full-screen, centered introduction.
function Home({ onNavClick }) {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img src={profile.photo} alt={profile.name} />
        </div>

        <p className="hero-eyebrow">
          {profile.title} <span className="hero-eyebrow-dot">·</span>{" "}
          {profile.location}
        </p>

        <h1 className="hero-heading">
          {home.greeting}{" "}
          <span className="hero-highlight">{home.highlightName}</span>.
        </h1>

        <p className="hero-tagline">{home.tagline}</p>

        <div className="hero-paragraphs">
          <p>{home.intro}</p>
        </div>

        <div className="hero-actions">
          <button
            className="button button-primary"
            onClick={() => onNavClick("projects")}
          >
            View my work
          </button>
          <button
            className="button button-ghost"
            onClick={() => onNavClick("contact")}
          >
            Get in touch
          </button>
        </div>

        <ul className="hero-socials">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
      </div>

      <button
        className="hero-scroll"
        onClick={() => onNavClick("projects")}
        aria-label="Scroll to next section"
      >
        <span className="hero-scroll-line" />
      </button>
    </section>
  );
}

export default Home;
