import { projects } from "../../data";
import "../../css/Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">
          SOME PROJECTS I'VE BUILT / BEEN PART OF
        </p>
        <h2 className="section-heading">Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => {
            const featured = index === 0;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                className={`project-card${featured ? " project-card--featured" : ""}`}
                key={project.title}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <span className="project-number" aria-hidden="true">
                    {number}
                  </span>

                  {featured && (
                    <p className="project-badge">
                      <span className="project-badge-dot" />
                      NEW
                    </p>
                  )}

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  {(project.visit || project.github) && (
                    <div className="project-actions">
                      {project.github && (
                        <a
                          className="project-github"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          title="GitHub"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.visit && (
                        <a
                          className="project-link"
                          href={project.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit page →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
