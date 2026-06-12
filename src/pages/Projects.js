import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Supply Chain Management System",
      description: "A robust backend project for a supply chain management system.",
      link: "https://github.com/Manusha33/ByteFlow-SCM-System"
    },
  ];

  return (
    <div className="page-content">
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Repository &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;