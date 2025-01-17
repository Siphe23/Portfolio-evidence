import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import '../styling/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Portfolio by Nasiphi Ndzumo</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ marginRight: '10px', fontSize: '20px' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ marginRight: '10px', fontSize: '20px' }} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: '20px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
