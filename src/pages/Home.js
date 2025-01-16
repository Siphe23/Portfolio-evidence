import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro">
        <h2>Hello, It's Me</h2>
        <h1>Nasiphi Ndzumo</h1>
        <p>And I'm a Web Developer</p>
        <button className="btn">Download CV</button>
      </div>
      <div className="image-container">
        <img src="/path-to-your-image.jpg" alt="Nasiphi" />
      </div>
    </motion.div>
  );
}

export default Home;
