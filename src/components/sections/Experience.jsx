import { experience } from '../../data';

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">Where I've been</p>
        <h2 className="section-heading">Experience</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.role + job.company}>
              <div className="timeline-header">
                <h3 className="timeline-role">{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-points">
                {job.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
