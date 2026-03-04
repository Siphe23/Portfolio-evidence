import React from 'react'; 
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import '../styling/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Portfolio by Nasiphi Ndzumo</p>
        Last update: 04/03/2026

        {/* Footer navigation links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ marginRight: '10px', fontSize: '20px' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ marginRight: '10px', fontSize: '20px' }} />
          </a>
          {/* Updated GitHub link to your profile */}
          <a href="https://github.com/Siphe23" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: '20px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;