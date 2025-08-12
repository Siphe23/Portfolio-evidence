import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons'; 
import '../styling/Skills.css';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: faHtml5, proficiency: 'Advanced', notes: 'Used in multiple projects.' },
    { id: 2, name: 'CSS', icon: faCss3Alt, proficiency: 'Intermediate', notes: 'Styled responsive layouts.' },
    { id: 3, name: 'JavaScript', icon: faJs, proficiency: 'Intermediate', notes: 'Built dynamic web applications.' },
    { id: 4, name: 'React', icon: faReact, proficiency: 'Intermediate', notes: 'Developed a to-do list app.' },
    { id: 5, name: 'Node.js', icon: faNodeJs, proficiency: 'Intermediate', notes: 'Built backend services with Express.' },
    { id: 6, name: 'React Native', icon: faReact, proficiency: 'Intermediate', notes: 'Developed cross-platform mobile apps.' },
    { id: 7, name: 'MongoDB', icon: faDatabase, proficiency: 'Intermediate', notes: 'Built databases for scalable applications.' },
    { id: 8, name: 'Firebase', icon: faFire, proficiency: 'Intermediate', notes: 'Integrated authentication and real-time databases.' },
    { id: 9, name: 'REST API', icon: faDatabase, proficiency: 'Intermediate', notes: 'Developed and consumed APIs for data communication.' },
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <FontAwesomeIcon icon={skill.icon} size="3x" />
            <h3>{skill.name}</h3>
            <p><strong>Proficiency:</strong> {skill.proficiency}</p>
            <p><strong>Notes/Examples:</strong> {skill.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
