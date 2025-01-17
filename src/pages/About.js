import React from "react";
import "../styling/About.css";
import nasiphiImg from "../nasiphi.png.png";  

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nasiphi Ndzumo, a passionate web developer with expertise in
            React.js, React Native, Node.js, MongoDB, and Firebase Authentication. 
            I strive to create professional, responsive, and visually appealing
            web applications that deliver exceptional user experiences.
          </p>
        </div>
        <div className="about-image">
          <img src={nasiphiImg} alt="Nasiphi Ndzumo" />
        </div>
      </div>
    </section>
  );
};

export default About;
