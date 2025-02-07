import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaToolbox, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa'; // Import icons
import '../styling/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio.</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/"><FaHome style={{ marginRight: '5px' }} />Home</Link></li>
        <li><Link to="/about"><FaUserAlt style={{ marginRight: '5px' }} />About</Link></li>
        <li><Link to="/skills"><FaToolbox style={{ marginRight: '5px' }} />Skills</Link></li>
        <li><Link to="/projects"><FaProjectDiagram style={{ marginRight: '5px' }} />Projects</Link></li>
        <li><Link to="/contact"><FaEnvelope style={{ marginRight: '5px' }} />Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styling/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1 className="logo">Portfolio.</h1>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/skills">Skills</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
