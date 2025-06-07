import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '/src/Projects.css';

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      type:'Diploma Final Year Project',
      title: 'True Care Life (TCL)',
      overview: 'This project aimed to streamline vaccination record management across India by transitioning from traditional paper-based systems to a modern, web-based platform.',
      techStack: ['Html','CSS3','JavaScript','PHP','MySql'],
      githubLink: 'https://github.com/Mandeep210405/TCL',
      KeyFeatures: ['Centralized Record Management','Appointment Scheduling','Recommendations','Location Integration','Insights and Analytics']
    },
    {
      title: 'NEXX (Educational Platform)',
      overview: 'Developed a comprehensive educational platform with centralized access to study materials, practicals, and previous papers for engineering students, featuring a robust content management system, efficient file handling for PDFs, videos, and assignments, and a secure role-based authentication system for administrators.',
      techStack: ['MySQL','PHP 7.4+','JavaScript',' HTML5','Bootstrap','Apache Web Server'],
      githubLink: 'https://github.com/Mandeep210405/TCL-Degree',
      KeyFeatures: ['Centralized Educational Access','Multi-Branch & Semester Support','Efficient File Management System','Responsive Web Interface','RESTful API Integration','Asynchronous Operations with AJAX']
    }
    // Add more projects here...
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card blur-card">
              <h3>{project.title}</h3>
              <p className="overview">{project.overview}</p>

              <div className="tech-stack">
                <h4>Technology Stack:</h4>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                <h4>Key Features:</h4>
                <ul>
                  {project.KeyFeatures.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
