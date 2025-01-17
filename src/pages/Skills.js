import React from 'react';
import '../styling/Skills.css';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', image: '/icons/html-icon.png' },
    { id: 2, name: 'CSS', image: '/icons/css-icon.png' },
    { id: 3, name: 'JavaScript', image: '/icons/js-icon.png' },
    { id: 4, name: 'React', image: '/icons/react-icon.png' },
    { id: 5, name: 'Node.js', image: '/icons/nodejs-icon.png' },
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
