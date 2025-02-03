import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animation
import "../styling/Collabs.css";

function Collabs() {
    return (
        <div className="collabs">
            <h1><span>Collabs</span> Work:</h1>
            <section className="collabs-container">
                <motion.div
                    className="collab-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="collab-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                        <h2>Project Name 1</h2>
                    </div>
                    <div className="collab-content">
                        <p><strong>Description:</strong> A brief overview of the project.</p>
                        <p><strong>Tech Stack:</strong> React, Node.js, CSS, MongoDB</p>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                        </ul>
                        <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
                        <p><strong>Screenshots/Demo Links:</strong> 
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>, 
                            <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="collab-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="collab-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                        <h2>Project Name 2</h2>
                    </div>
                    <div className="collab-content">
                        <p><strong>Description:</strong> A brief overview of the project.</p>
                        <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS, Firebase</p>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                        </ul>
                        <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
                        <p><strong>Screenshots/Demo Links:</strong> 
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>, 
                            <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default Collabs;
