import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '../styling/Skills.css';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: faHtml5 },
    { id: 2, name: 'CSS', icon: faCss3Alt },
    { id: 3, name: 'JavaScript', icon: faJs },
    { id: 4, name: 'React', icon: faReact },
    { id: 5, name: 'Node.js', icon: faNodeJs },
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <FontAwesomeIcon icon={skill.icon} size="3x" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
