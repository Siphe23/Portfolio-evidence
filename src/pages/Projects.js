import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import '../styling/Projects.css';

function Projects() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const projectsData = [
    {
      category: 'UI Challenges',
      projects: [
        {
          name: 'Scan code',
          github: 'https://github.com/yourusername/scan-code',
          deployed: 'https://yourusername.github.io/scan-code',
        },
        {
          name: 'Intro Section with Dropdown Navigation',
          github: 'https://github.com/yourusername/intro-dropdown',
          deployed: 'https://yourusername.github.io/intro-dropdown',
        },
      ],
    },
    {
      category: 'React.js',
      projects: [
        {
          name: 'Age Calculator',
          github: 'https://github.com/yourusername/age-calculator',
          deployed: 'https://yourusername.github.io/age-calculator',
        },
        {
          name: 'Employee App',
          github: 'https://github.com/yourusername/employee-app',
          deployed: 'https://yourusername.github.io/employee-app',
        },
        {
          name: 'To-Do List App',
          github: 'https://github.com/yourusername/to-do-list-app',
          deployed: 'https://yourusername.github.io/to-do-list-app',
        },
        {
          name: 'Shopping List App',
          github: 'https://github.com/yourusername/shopping-list-app',
          deployed: 'https://yourusername.github.io/shopping-list-app',
        },
        {
          name: 'Weather App',
          github: 'https://github.com/yourusername/weather-app',
          deployed: 'https://yourusername.github.io/weather-app',
        },
        {
          name: 'Recipe App',
          github: 'https://github.com/yourusername/recipe-app',
          deployed: 'https://yourusername.github.io/recipe-app',
        },
      ],
    },
    {
      category: 'Node.js',
      projects: [
        {
          name: 'Server.js',
          github: 'https://github.com/yourusername/server-js',
          deployed: 'https://yourusername.github.io/server-js',
        },
        {
          name: 'Shopping Node.js',
          github: 'https://github.com/yourusername/shopping-nodejs',
          deployed: 'https://yourusername.github.io/shopping-nodejs',
        },
        {
          name: 'Quiz App',
          github: 'https://github.com/yourusername/quiz-app',
          deployed: 'https://yourusername.github.io/quiz-app',
        },
        {
          name: 'Memory Game',
          github: 'https://github.com/yourusername/memory-game',
          deployed: 'https://yourusername.github.io/memory-game',
        },
      ],
    },
    {
      category: 'MERN Stack',
      projects: [
        {
          name: 'Hotel App',
          github: 'https://github.com/yourusername/hotel-app',
          deployed: 'https://yourusername.github.io/hotel-app',
        },
      ],
    },
    {
      category: 'React Native',
      projects: [
        {
          name: 'Birthday Card',
          github: 'https://github.com/yourusername/birthday-card',
          deployed: 'https://yourusername.github.io/birthday-card',
        },
        {
          name: 'Audio Recording App',
          github: 'https://github.com/yourusername/audio-recording',
          deployed: 'https://yourusername.github.io/audio-recording',
        },
        {
          name: 'Payment Gateway',
          github: 'https://github.com/yourusername/payment-gateway',
          deployed: 'https://yourusername.github.io/payment-gateway',
        },
        {
          name: 'Gallery App',
          github: 'https://github.com/yourusername/gallery-app',
          deployed: 'https://yourusername.github.io/gallery-app',
        },
        {
          name: 'Shopping List App',
          github: 'https://github.com/yourusername/shopping-list-app-react-native',
          deployed: 'https://yourusername.github.io/shopping-list-app-react-native',
        },
      ],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((category) => (
          <div key={category.category} className="project-card">
            <div className="card-header">
              <h2 className="card-title">{category.category}</h2>
              <button
                className="toggle-button"
                onClick={() => toggleCategory(category.category)}
              >
                {expandedCategory === category.category ? 'Less' : 'More'}
              </button>
            </div>
            <ul className="project-list">
              {(expandedCategory === category.category
                ? category.projects
                : category.projects.slice(0, 3)
              ).map((project, index) => (
                <li key={index} className="project-item">
                  <span className="project-icon">🔹</span> {project.name}
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

