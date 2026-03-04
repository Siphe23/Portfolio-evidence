import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styling/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          Nasiphi <span>Ndzumo.</span>
        </h1>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;