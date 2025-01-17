
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaToolbox, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styling/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Nasiphi Ndzumo.</h1>
        <nav>
          <ul className="nav-links">
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
