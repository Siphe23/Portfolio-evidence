import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaToolbox, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa'; 
import '../styling/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Nasiphi <span>Ndzumo.</span></h1>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}><FaHome style={{ marginRight: '5px' }} />Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}><FaUserAlt style={{ marginRight: '5px' }} />About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}><FaToolbox style={{ marginRight: '5px' }} />Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}><FaProjectDiagram style={{ marginRight: '5px' }} />Projects</a></li>
            
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}><FaEnvelope style={{ marginRight: '5px' }} />Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;