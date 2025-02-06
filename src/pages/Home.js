import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons
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
        <p>
          I'm a CodeTriber at <strong className="mlab-highlight">MLab</strong>
        </p>
        <p>And I'm a <strong>Web Developer</strong></p>

        {/* Contact information */}
        <div className="contact-info">
          <p>
            <FaPhoneAlt className="icon" /> <span>060 757 0454</span>
          </p>
          <p>
            <FaEnvelope className="icon" /> <span>siphesihlemzamane@gmail.com</span>
          </p>
        </div>

        {/* Button container for additional buttons */}
        <div className="btn-container">
          <a href="./CV/Nasiphi CV.pdf" download>
            <button className="btn">Download CV</button>
          </a>
          <Link to="/assessment">
            <button className="btn">Assessment</button>
          </Link>
          <Link to="/collabs">
            <button className="btn">Collabs</button>
          </Link>
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
