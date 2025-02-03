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
                        <td>UI Challenge</td>
                        <td><a href="#">URL</a></td>
                        <td>Date</td>
                        <td>85%</td>
                        <td>Above average</td>
                    </tr>
                    <tr>
                        <td>JavaScript Assessment</td>
                        <td><a href="#">URL</a></td>
                        <td>Date</td>
                        <td>90%</td>
                        <td>Excellent understanding of basics</td>
                    </tr>
                    <tr>
                        <td>React Native</td>
                        <td><a href="#">URL</a></td>
                        <td>Date</td>
                        <td>N/A</td>
                        <td>Completed an external course</td>
                    </tr>
                </tbody>
            </table>

            <h3>Feedback and Reflections</h3>
            <h4>Facilitator Feedback:</h4>
            <p> feedback comments from CodeTribe facilitators.</p>

            <h4>Self-Reflection:</h4>
            <p>Describe your growth, strengths, and areas for improvement during the program.</p>

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

