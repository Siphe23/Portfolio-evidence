import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styling/Projects.css';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('UI Challenges');

  const projectsData = [
    {
      category: 'UI Challenges',
      projects: [
        { name: 'Scan code', github: 'https://github.com/yourusername/scan-code', deployed: 'https://yourusername.github.io/scan-code' },
        { name: 'Intro Section with Dropdown Navigation', github: 'https://github.com/yourusername/intro-dropdown', deployed: 'https://yourusername.github.io/intro-dropdown' },
      ],
    },
    {
      category: 'Web Development',
      projects: [
        { name: 'OIBSIP', language: 'HTML/CSS/JS', github: 'https://github.com/Siphe23/OIBSIP', deployed: 'https://siphe23.github.io/OIBSIP' },
        { name: 'EARCO', language: 'CSS', github: 'https://github.com/Siphe23/EARCO', deployed: 'https://siphe23.github.io/EARCO' },
      ],
    },
    {
      category: 'JavaScript Projects',
      projects: [
        { name: 'Age Calculator', language: 'JavaScript', github: 'https://github.com/yourusername/age-calculator', deployed: 'https://yourusername.github.io/age-calculator' },
      ],
    },
    {
      category: 'React.js',
      projects: [
        { name: 'weather-app', language: 'React JS', github: 'https://github.com/Siphe23/weather-app', deployed: 'https://siphe23.github.io/weather-app' },
        { name: 'SafeSpaceSA', language: 'React JS', github: 'https://github.com/Siphe23/SafeSpaceSA', deployed: 'https://siphe23.github.io/SafeSpaceSA' },
        { name: 'Aktive60-web', language: 'JavaScript', note: 'Collaboration', github: 'https://github.com/Siphe23/Aktive60-web', deployed: 'https://siphe23.github.io/Aktive60-web' },
      ],
    },
    {
      category: 'React Native',
      projects: [
        { name: 'RideApp', language: 'React Native', github: 'https://github.com/Siphe23/RideApp', deployed: 'https://siphe23.github.io/RideApp' },
        { name: 'AudioRecordingApp-Native', language: 'React Native', github: 'https://github.com/Siphe23/AudioRecordingApp-Native', deployed: 'https://siphe23.github.io/AudioRecordingApp-Native' },
        { name: 'Birthday-react-native', language: 'React Native', github: 'https://github.com/Siphe23/Birthday-react-native', deployed: 'https://siphe23.github.io/Birthday-react-native' },
        { name: 'synthstage-ai', language: 'React Native', github: 'https://github.com/Siphe23/synthstage-ai', deployed: 'https://siphe23.github.io/synthstage-ai' },
        { name: 'GLOUDGLOBEAI', language: 'React Native', github: 'https://github.com/Siphe23/GLOUDGLOBEAI', deployed: 'https://siphe23.github.io/GLOUDGLOBEAI' },
        { name: 'Voice Login App', language: 'React Native', github: 'https://github.com/Siphe23/VoiceLoginApp', deployed: 'https://siphe23.github.io/VoiceLoginApp' },
      ],
    },
  ];

  const selectedProjects = projectsData.find(
    (category) => category.category === selectedCategory
  );

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-layout">
        <div className="projects-sidebar">
          {projectsData.map((category) => (
            <button
              key={category.category}
              className={`category-button ${selectedCategory === category.category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>
        <div className="projects-content">
          <h2 className="category-heading" key={selectedCategory}>
            {selectedProjects.projects.length} project{selectedProjects.projects.length !== 1 ? 's' : ''}
          </h2>
          <ul className="project-list" key={`${selectedCategory}-list`}>
            {selectedProjects.projects.map((project, index) => (
              <li key={index} className="project-item" style={{ animationDelay: `${Math.min(index, 10) * 0.06}s` }}>
                <div className="project-card-header">
                  <span className="project-name">{project.name}</span>
                  {project.note && <span className="project-note">{project.note}</span>}
                </div>
                {project.language && (
                  <span className="project-language-badge">
                    <span className="language-dot" />
                    {project.language}
                  </span>
                )}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                    <FaGithub /> GitHub
                  </a>
                  {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="link-icon link-icon-primary">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;