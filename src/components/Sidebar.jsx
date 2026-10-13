import { profile } from "../data";
import "./Sidebar.css";

// The left column. On dennisthedeveloper.net this space has an AI chat —
// here it's a simple profile card instead: photo, name, title and contact info.
// It stays in place while the content on the right scrolls.
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-wrapper">
        <div className="profile-box">
          <div className="profile-avatar">
            <img src="/src/images/kareempic.jpg" />
          </div>

          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-tagline">{profile.tagline}</p>

          <div className="profile-divider" />

          <ul className="profile-info">
            <li>📍 {profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            </li>
          </ul>

          <div className="profile-socials">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="profile-social-link"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
