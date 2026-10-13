import { skills } from "../../data";
import "../../css/Skills.css";

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">Experience in</p>
        <h2 className="section-heading"></h2>

        <div className="skills-groups">
          {skills.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3 className="skills-group-title">{group.category}</h3>
              <ul className="skills-tags">
                {group.items.map((item) => (
                  <li className="skills-tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
