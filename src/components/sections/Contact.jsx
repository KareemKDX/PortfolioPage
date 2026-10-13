import { profile } from "../../data";
import "../../css/Contact.css";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-inner">
        <p className="section-eyebrow">Open for opportunities</p>
        <h2 className="section-heading">Let's work together!</h2>
        <p className="section-paragraph">
          I'm currently looking for an internship (LIA) in fullstack / software
          development. Feel free to reach out through any channel. I'd be happy
          to connect and talk more.
        </p>

        <a className="button button-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact-icons">
          <a
            className="contact-icon"
            href="https://se.linkedin.com/in/kareem-drammeh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            className="contact-icon"
            href="https://github.com/KareemKDX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            className="contact-icon"
            href="https://discord.com/users/DITT_USER_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            title="Discord"
          >
            <FaDiscord size={24} />
          </a>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}

export default Contact;
