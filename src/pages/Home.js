import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Home.css';
import nasiphiImg from "../nasiphi.png.png"; 

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro">
        <h2>Hello, It's Me</h2>
        <h1><span>N</span>asiphi Ndz<span>umo</span></h1>
        <p>And I'm a Web Developer</p>

       
        

        {/* Button container for additional buttons */}
        <div className="btn-container">
        <a href="./CV/Nasiphi CV.pdf" download>
          <button className="btn">Download CV</button>
        </a>
          <button className="btn">Assessment</button>
          <button className="btn">Group Work</button>
        </div>
      </div>

      {/* Image container */}
      <div className="image-container">
        <img src={nasiphiImg} alt="Nasiphi" />
      </div>
    </motion.div>
  );
}

export default Home;

