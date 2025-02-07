import React from 'react';
import '../styling/Group.css'; 

function Group() {
    return (
        <section className="group">
        <div className="group-container">
            <section className="group-card">
                <div className="group-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                    <h2>Project Name 1</h2>
                </div>
                <div className="group-content">
                    <p><strong>Description:</strong> A brief overview of the project.</p>
                    <p><strong>Tech Stack:</strong> React, Node.js, CSS, MongoDB</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                    </ul>
                    <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
                    <p><strong>Screenshots/Demo Links:</strong> <a href="#">GitHub</a>, <a href="#">Live Demo</a></p>
                </div>
            </section>

            <section className="group-card">
                <div className="group-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                    <h2>Project Name 2</h2>
                </div>
                <div className="group-content">
                    <p><strong>Description:</strong> A brief overview of the project.</p>
                    <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS, Firebase</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                    </ul>
                    <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
                    <p><strong>Screenshots/Demo Links:</strong> <a href="#">GitHub</a>, <a href="#">Live Demo</a></p>
                </div>
            </section>

            <section className="group-card">
                <div className="group-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                    <h2>Project Name 3</h2>
                </div>
                <div className="group-content">
                    <p><strong>Description:</strong> A brief overview of the project.</p>
                    <p><strong>Tech Stack:</strong> Angular, Node.js, PostgreSQL</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                    </ul>
                    <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
                    <p><strong>Screenshots/Demo Links:</strong> <a href="#">GitHub</a>, <a href="#">Live Demo</a></p>
                </div>
            </section>

            {/* Group Projects Section */}
            <section className="group-card">
                <div className="group-header" style={{ borderLeft: '5px solid #18d4ee' }}>
                    <h2>Group Project Name</h2>
                </div>
                <div className="group-content">
                    <p><strong>Description:</strong> Overview of the project and your role.</p>
                    <p><strong>Team Members:</strong> John, Jane, Alex, Emma</p>
                    <p><strong>Tech Stack:</strong> Vue, Node.js, MongoDB</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                    </ul>
                    <p><strong>Collaboration Experience:</strong> We worked in an agile environment using Scrum, Trello for task management.</p>
                    <p><strong>Screenshots/Demo Links:</strong> <a href="#">GitHub</a>, <a href="#">Live Demo</a></p>
                </div>
            </section>
        </div>
        </section>
    );
}

export default Group;

