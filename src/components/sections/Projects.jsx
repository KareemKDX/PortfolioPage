import { projects } from "../../data";
import "../../css/Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">
          SOME PROJECTS I'VE BUILT / BEEN PART OF
        </p>
        <h2 className="section-heading">Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link className="project-link" to={project.link}>
                  Visit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
