import React from 'react'; 
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import '../styling/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Portfolio by Nasiphi Ndzumo</p>
          <p className="last-update">Last update: 11/11/2026</p>
        </div>

        {/* Footer navigation links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Siphe23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;