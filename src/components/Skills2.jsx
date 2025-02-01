import React, { useState } from 'react';
import { FaCode, FaServer, FaTools, FaUsers } from 'react-icons/fa';
import '/src/Skills2.css';

const Skills2 = () => {
  // Skill categories with tools and percentages
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      tools: [
        { name: 'React', percentage: 70 },
        { name: 'Vue', percentage: 50 },
        { name: 'BootStrap', percentage: 70 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'Html5', percentage: 77 },
        { name: 'CSS3', percentage: 78 },
      ],
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      tools: [
        { name: 'Node.js', percentage: 40 },
        { name: 'MySql', percentage: 85 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'PHP', percentage: 90 },
        { name: 'Python', percentage: 60 },
        { name: 'Advance Java', percentage: 75 },
      ],
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      tools: [
        { name: 'Git & GitHub', percentage: 85 },
        { name: 'Visual Studio Code', percentage: 75 },
        { name: 'Webpack', percentage: 60 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      tools: [
        { name: 'Communication', percentage: 90 },
        { name: 'Teamwork', percentage: 85 },
        { name: 'Problem Solving', percentage: 80 },
      ],
    },
  ];

  // State to manage the selected skill category
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);

  // Function to handle skill category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  
    // Scroll to the progress bar section with an offset
    const progressBarElement = document.getElementById('progress-bar-section');
    if (progressBarElement) {
      const offset = -200; // Adjust this value to fine-tune the scroll
      const elementPosition = progressBarElement.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = elementPosition + offset;
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>

        <div className="skills-grid">
          {/* Skill Category Cards */}
          <div className="skill-cards">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`skill-card blur-card ${
                  selectedCategory.title === category.title ? 'active' : ''
                }`}
                onClick={() => {
                  handleCategoryClick(category);
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <ul>
                  {category.tools.map((tool, i) => (
                    <li key={i}>{tool.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tool Proficiency List */}
          <div id="progress-bar-section" className="tool-list">
            {selectedCategory.tools.map((tool, index) => (
              <div key={index} id="progressbarr" className="tool-item">
                <div className="tool-info">
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-percentage">{tool.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${tool.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills2;
