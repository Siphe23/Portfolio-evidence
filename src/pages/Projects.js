// Projects.js
import React from 'react';
import '..styling/Projects.css'; // Ensure this matches the provided CSS

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      image: '/path-to-images/weather-app.png',
      description: 'A real-time weather forecasting app.',
    },
    {
      id: 2,
      title: 'Recipe App',
      image: '/path-to-images/recipe-app.png',
      description: 'An app for managing and searching recipes.',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      image: '/path-to-images/portfolio.png',
      description: 'My personal portfolio built with React.',
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
