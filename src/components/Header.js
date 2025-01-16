import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Portfolio.</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
