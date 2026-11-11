import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaRocket, 
  FaDownload, 
  FaCode, 
  FaGraduationCap, 
  FaTrophy, 
  FaUsers, 
  FaMouse 
} from 'react-icons/fa';
import '../styling/Home.css';
import nasiphiImg from '../nasiphi.png.png';

// Floating shapes background component
const BackgroundShapes = () => (
  <div className="bg-shapes">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="dots dots-1"></div>
    <div className="dots dots-2"></div>
  </div>
);

function Home() {
  return (
    <div className="home-wrapper">
      <BackgroundShapes />
      
      <motion.div
        className="home-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* --- TOP SECTION: Text & Image --- */}
        <div className="home-top">
          
          {/* Left Column (Text) */}
          <div className="intro">
            <motion.div 
              className="availability-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="dot"></span> Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm <br />
              <span className="highlight-name">Nasiphi Ndzumo</span>
            </motion.h1>

            <motion.h3 
              className="role-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Web Developer <span className="divider">|</span> Tech Enthusiast <span className="divider">|</span> Problem Solver
            </motion.h3>

            <motion.p 
              className="bio-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I'm an IT graduate with a passion for building modern, responsive and 
              user-friendly web applications. I love turning ideas into real solutions with code.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="btn-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#projects" className="btn-primary">
                <FaRocket /> View My Projects <span>→</span>
              </a>
              <a 
                href="/Nasiphi_Siphesihle_NdzumoCV.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                <FaDownload /> Download CV
              </a>
            </motion.div>

            {/* Contact Info (Inline) */}
            <motion.div 
              className="contact-info-inline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span><FaPhoneAlt className="icon" /> 060 757 0454</span>
              <span><FaEnvelope className="icon" /> siphesihlemzamane@gmail.com</span>
            </motion.div>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="image-wrapper">
              {/* Glowing Rings (CSS) */}
              <div className="glow-ring ring-1"></div>
              <div className="glow-ring ring-2"></div>
              
              <img src={nasiphiImg} alt="Nasiphi Ndzumo" />
              
              {/* Decorative icons floating */}
              <div className="floating-icon icon-code"><FaCode /></div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: Stats Bar --- */}
        <motion.div 
          className="stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-icon"><FaCode /></div>
            <div className="stat-text">
              <h4>5+</h4>
              <p>Projects Completed</p>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon"><FaGraduationCap /></div>
            <div className="stat-text">
              <h4>NQF4</h4>
              <p>IT Qualification</p>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon"><FaTrophy /></div>
            <div className="stat-text">
              <h4>1+</h4>
              <p>Certifications</p>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon"><FaUsers /></div>
            <div className="stat-text">
              <h4>100%</h4>
              <p>Dedication</p>
            </div>
          </div>
        </motion.div>

        {/* --- SCROLL DOWN INDICATOR --- */}
        <motion.div 
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="scroll-line"></div>
          <div className="scroll-icon"><FaMouse /> Scroll Down</div>
          <div className="scroll-line"></div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Home;