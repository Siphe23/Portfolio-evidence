import React, { useState } from "react";
import "../styling/About.css";
import nasiphiImg from "../nasiphi.png.png"; 
import { 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaDownload, 
  FaFileAlt, 
  FaFolderOpen 
} from "react-icons/fa";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const downloadCV = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    
    const link = document.createElement("a");
    link.href = "/CV/Nasiphi Siphesihle resume (1).pdf";
    link.download = "Nasiphi Siphesihle CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

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
         <button className="btn" onClick={downloadCV} disabled={isAnimating}>
            <FaDownload className="btn-icon" /> Download CV
          </button>
    </section>
    
  );
};

export default About;
