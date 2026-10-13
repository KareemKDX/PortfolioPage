import { aboutMe, interests } from "../../data";
import "../../css/AboutMe.css";
import {
  FiSearch,
  FiActivity,
  FiMessageCircle,
  FiCoffee,
  FiMusic,
} from "react-icons/fi";
import "../../css/AboutMe.css";

const icons = {
  curious: <FiSearch size={20} />,
  running: <FiActivity size={20} />,
  talk: <FiMessageCircle size={20} />,
  music: <FiMusic size={20} />,
  coffee: <FiCoffee size={20} />,
};

function AboutMe() {
  return (
    <section id="aboutMe" className="section section-alt">
      <div className="section-inner section-flex-column">
        <div className="left">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading">Beyond the code</h2>

          <div className="aboutme-grid">
            <div className="aboutme-text">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="aboutme-interests">
            <h3 className="aboutme-interests-title"> </h3>
            <ul className="aboutme-interest-list">
              {interests.map((interest) => (
                <li className="aboutme-interest" key={interest.title}>
                  <span className="aboutme-interest-icon">
                    {icons[interest.icon]}
                  </span>
                  <div>
                    <h4>{interest.title}</h4>
                    <p>{interest.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
