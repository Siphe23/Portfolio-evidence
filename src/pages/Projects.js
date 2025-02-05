import React, { useState } from 'react';
import '../styling/Projects.css';


import weatherImg from '../images/weather.png';
import recordImg from '../images/record.png';
import todoImg from '../images/todo.png';

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const [showMore, setShowMore] = useState(false); 

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      image: weatherImg,
      description: 'A real-time weather forecasting app built with React and external APIs.',
      techStack: ['React', 'OpenWeather API', 'CSS'],
      keyFeatures: ['Real-time weather data', 'Search by city or location', 'Responsive design'],
      challenges: ['Handling API rate limits', 'Ensuring mobile responsiveness'],
      repoLink: 'https://github.com/Siphe23/weather-app.git',
      deployedLink: 'weather-app-git-main-nasiphis-projects-f287cdf3.vercel.app',
    },
    {
      id: 2,
      title: 'Recording App',
      image: recordImg,
      description: 'An app for recording audio using React Native.',
      techStack: ['React Native', 'Expo Audio API'],
      keyFeatures: ['Record, play, and delete audio clips', 'Save recordings to local storage'],
      challenges: ['Handling large audio files', 'Dealing with device permissions'],
      repoLink: 'https://github.com/Siphe23/AudioRecordingApp-Native.git',
      deployedLink: 'https://recording-app-deployment-link.com',
    },
    {
      id: 3,
      title: 'To-do List App',
      image: todoImg,
      description: 'A simple to-do list app built with React.',
      techStack: ['React', 'CSS'],
      keyFeatures: ['Add, edit, delete tasks', 'Mark tasks as completed', 'Filter tasks by status'],
      challenges: ['Managing state with React hooks', 'Ensuring task persistence'],
      repoLink: 'https://github.com/Siphe23/Todo-list.git',
      deployedLink: 'https://todo-list-ten-psi-29.vercel.app/',
    },
   
    ...(showMore ? [
      {
        id: 4,
        title: 'Library Management System',
        description: 'A library management system that handles books, users, and library operations.',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        keyFeatures: ['Add, remove, and update books', 'User authentication and authorization', 'Search for books'],
        challenges: ['Designing the MongoDB schema', 'Implementing user roles and permissions'],
        repoLink: 'https://github.com/Siphe23/Library-Management-System.git',
        deployedLink: 'age-form-had4ygee6-nasiphis-projects-f287cdf3.vercel.app',
      },
      {
        id: 5,
        title: 'Recipe App',
        description: 'A RESTful API for a Recipe App with user authentication and MongoDB integration.',
        techStack: ['Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
        keyFeatures: ['Create, read, update, and delete recipes', 'User authentication', 'Filter recipes by category'],
        challenges: ['Implementing authentication and authorization with JWT', 'Structuring API endpoints efficiently'],
        repoLink: 'https://github.com/Siphe23/Recipe-App-API.git',
        deployedLink: 'https://recipe-app-api.com',
      },
      {
        id: 6,
        title: 'E-commerce API',
        description: 'A RESTful API for an e-commerce platform with user authentication.',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        keyFeatures: ['Product CRUD operations', 'User authentication', 'Payment integration'],
        challenges: ['Managing inventory and orders', 'Ensuring secure payment transactions'],
        repoLink: 'https://github.com/Siphe23/Ecommerce-API.git',
        deployedLink: 'https://ecommerce-api.com',
      },
     
    ] : [])
  ];

  const handleShowMore = () => {
    setShowMore(prev => !prev);  
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {project.image && <img src={project.image} alt={project.title} />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>

            {expanded[project.id] && (
              <div className="expanded-content">
                <div className="key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="challenges">
                  <h4>Challenges Faced:</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <button className="expand-btn" onClick={() => toggleExpand(project.id)}>
              {expanded[project.id] ? 'View Less' : 'View More'}
            </button>

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
      <button className="more-btn" onClick={handleShowMore}>
        {showMore ? 'Show Less' : 'Show More Projects'}
      </button>
    </div>
  );
};

export default Projects;