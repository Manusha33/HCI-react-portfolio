import React from 'react';

function About() {
  const skills = [
    "JavaScript (React, Node.js)",
    "Java",
    "HTML5 & CSS3",
    "SQL & Database Design",
    "Version Control (Git & GitHub)",
    "Python",
    "Problem Solving",
    "Eager to Learn & Adapt"
  ];

  return (
    <div className="page-content">
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Educational Background</h2>
          <div className="card">
            <p className="card-subtitle">Studying Information Technology from,</p>
            <h3>Institute of Technology, University of Moratuwa (ITUM)</h3>
            <p>Currently studying and building a strong foundation in modern software engineering principles, analyzing complex computational problems, and developing impactful tech solutions.</p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Core competencies and technologies I am working with</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">{skill}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;