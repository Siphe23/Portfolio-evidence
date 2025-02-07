import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/"><FaHome style={{ marginRight: '5px' }} />Home</Link></li>
            <li><Link to="/about"><FaUserAlt style={{ marginRight: '5px' }} />About</Link></li>
            <li><Link to="/skills"><FaToolbox style={{ marginRight: '5px' }} />Skills</Link></li>
            <li><Link to="/projects"><FaProjectDiagram style={{ marginRight: '5px' }} />Projects</Link></li>
            <li><Link to="/contact"><FaEnvelope style={{ marginRight: '5px' }} />Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
