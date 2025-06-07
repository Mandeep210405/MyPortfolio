import React from 'react';
import { FaCode, FaServer, FaTools, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { title: 'Frontend', icon: <FaCode />, tools: ['React', 'HTML5', 'CSS3', 'JavaScript'] },
    { title: 'Backend', icon: <FaServer />, tools: ['Node.js', 'Express', 'MongoDB'] },
    // Add more skills...
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="blur-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <ul>
                {skill.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;