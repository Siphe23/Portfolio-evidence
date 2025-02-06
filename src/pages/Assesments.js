import React from 'react'; 
import "../styling/Assesment.css";

function Assessments() {
    return (
        <div className="assessments">
            <h2>Assessments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Assessment</th>
                        <th>Git Link</th>
                        <th>Date Completed</th>
                        <th>Grade/Score</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UI Challenge: Age calculator</td>
                        <td><a href="https://github.com/Siphe23/age-form-app.git" target="_blank" rel="noopener noreferrer">GitHub Link</a></td>
                        <td>Date: August-2024 </td>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>React js: Market place</td>
                        <td><a href="https://github.com/Siphe23/marketShopping.git" target="_blank" rel="noopener noreferrer">GitHub Link</a></td>
                        <td>Date: November-2024</td>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>React Native: Travel weather app</td>
                        <td><a href="https://github.com/Portia-Nelly-Mashaba/restaurant-reservation-app-v2.git" target="_blank" rel="noopener noreferrer">URL</a></td>
                        <td>Date: January-2025</td>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </table>

            <h3>Feedback and Reflections</h3>
            <h4>Facilitator Feedback:</h4>
            <p>Feedback comments from CodeTribe facilitators.</p>

            <h4>Self-Reflection:</h4>
            <p>During this program, I have experienced significant growth in my ability to develop and manage full-stack projects. My strengths include building responsive user interfaces and working efficiently with React.js and React Native. However, I recognize the need to improve my backend skills, particularly in optimizing database queries and implementing scalable APIs. This journey has solidified my passion for problem-solving and continuous learning.</p>

            <h3>Post-Program Goals</h3>
            <h4>Short-Term Goals:</h4>
            <ul>
                <li>Secure a job in web development.</li>
            </ul>

            <h4>Long-Term Goals:</h4>
            <ul>
                <li>Become a full-stack developer.</li>
            </ul>
        </div>
    );
}

export default Assessments;
