import React, { useState } from "react";
import "../styling/About.css";
import nasiphiImg from "../nasiphi.png.png"; 
import { 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaFileAlt, 
  FaFolderOpen 
} from "react-icons/fa";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  

  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nasiphi Ndzumo, a web developer passionate about crafting responsive, user-friendly apps.
          </p>

       

          {isAnimating && (
            <div className="fly-animation">
              <FaFileAlt className="file-icon" />
              <FaFolderOpen className="folder-icon" />
            </div>
          )}
        </div>

        <div className="about-image">
          <img src={nasiphiImg} alt="Nasiphi Ndzumo" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="about-cards">
        <div className="card">
          <FaCode className="card-icon" />
          <h3>Skills</h3>
          <p>
            React.js,React Native,
            Node.js, MongoDB, 
            Firebase, JavaScript, CSS3, HTML5,.
          </p>
        </div>
        <div className="card">
          <FaBriefcase className="card-icon" />
          <h3>Experience</h3>
          <p>
            2+ years of building web apps, collaborative.
          </p>
        </div>
        <div className="card">
          <FaGraduationCap className="card-icon" />
          <h3>Education</h3>
          <p>
            Ekurhuleni Tvet College Graduated.
          </p>
        </div>
      </div>
         
    </section>
    
  );
};

export default About;
