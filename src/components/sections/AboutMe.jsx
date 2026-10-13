import { aboutMe, interests, programmer } from "../../data";
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
      <div className="section-inner">
        <p className="section-eyebrow">About me</p>
        <h2 className="section-heading">Me as a programmer</h2>

        {/* The developer story, with a small "code window" next to it. */}
        <div className="aboutme-dev">
          <div className="aboutme-dev-text">
            {programmer.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="code-window" aria-hidden="true">
            <div className="code-window-bar">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-window-file">kareem.js</span>
            </div>
            <pre className="code-window-body">
              <code>
                <span className="code-keyword">const</span> kareem = {"{"}
                {"\n"}
                {programmer.snippet.map((line) => (
                  <span key={line.key}>
                    {"  "}
                    <span className="code-key">{line.key}</span>:{" "}
                    {line.list ? (
                      <>
                        [
                        {line.list.map((item, index) => (
                          <span key={item}>
                            <span className="code-string">"{item}"</span>
                            {index < line.list.length - 1 && ", "}
                          </span>
                        ))}
                        ]
                      </>
                    ) : (
                      <span className="code-string">{line.value}</span>
                    )}
                    ,{"\n"}
                  </span>
                ))}
                {"};"}
              </code>
            </pre>
          </div>
        </div>

        {/* Beyond the code: personal story on the left, interests on the right. */}
        <div className="aboutme-beyond">
          <div className="left">
            <h3 className="aboutme-subheading">Beyond the code</h3>

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
      </div>
    </section>
  );
}

export default AboutMe;
