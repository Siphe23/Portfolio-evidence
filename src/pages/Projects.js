import React from 'react';
import '../styling/Projects.css';

// Import images
import weatherImg from '../images/weather.png';
import recordImg from '../images/record.png';
import todoImg from '../images/todo.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      image: weatherImg,
      description: 'A real-time weather forecasting app.',
      repoLink: 'https://github.com/Siphe23/weather-app.git', 
      deployedLink: 'https://your-deployed-link.com',  
    },
    {
      id: 2,
      title: 'Recording App',
      image: recordImg,
      description: 'An app for recording using React Native.',
      repoLink: 'https://github.com/Siphe23/AudioRecordingApp-Native.git', 
      deployedLink: 'https://your-deployed-link.com',  
    },
    {
      id: 3,
      title: 'To-do List App',
      image: todoImg,
      description: 'A To-Do List app to help you stay organized.',
      repoLink: 'https://github.com/Siphe23/Todo-list.git', 
      deployedLink: 'https://todo-list-ten-psi-29.vercel.app/', 
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
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              {project.deployedLink && (
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  View Deployed
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
