import React from 'react'; 
import { motion } from 'framer-motion'; 
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
                        <h2>Weather-Based Travel Planner with API Integration</h2>
                    </div>
                    <div className="collab-content">
                        <p><strong>Description:</strong> The Weather-Based Travel Planner is a web application designed to help users plan trips based on real-time weather conditions. Users can search for destinations, view weather data, and receive activity recommendations based on the weather. The app also offers features like saving favorite destinations and viewing them on a map.</p>
                        <p><strong>Tech Stack:</strong> React.js, Node.js, CSS, Firebase, OpenWeatherMap API, Google Maps API</p>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li><strong>Destination Search:</strong> Allows users to search for destinations by city or location.</li>
                            <li><strong>Weather Integration:</strong> Displays current weather conditions and a 7-day forecast using the OpenWeatherMap API.</li>
                            <li><strong>Activity Recommendations:</strong> Suggests activities based on weather conditions (e.g., hiking for sunny weather, indoor activities for rainy days).</li>
                            <li><strong>Favorites List:</strong> Users can save and manage a list of favorite destinations.</li>
                            <li><strong>Map Integration:</strong> Displays selected destinations on an interactive map using Google Maps API.</li>
                        </ul>
                        <p><strong>Challenges Faced and Solutions:</strong> One of the main challenges was integrating weather and map APIs. The solution was optimizing API calls to ensure fast loading times and implementing error handling for cases where API data may be unavailable.</p>
                        <p><strong>Screenshots/Demo Links:</strong> 
                            <a href="https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git" target="_blank" rel="noopener noreferrer">GitHub</a>, 
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
                        <h2>Restaurant Reservation App</h2>
                    </div>
                    <div className="collab-content">
                        <p><strong>Description:</strong> The Restaurant Reservation app is a web-based platform that allows users to search for restaurants, view available reservations, and book tables. It offers features such as user authentication, reservation management, and reviews of restaurants to provide a seamless dining experience.</p>
                        <p><strong>Tech Stack:</strong> React.js, Redux, Node.js, Express.js, MongoDB, CSS</p>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li><strong>Restaurant Search:</strong> Users can search for restaurants based on location, cuisine, and availability.</li>
                            <li><strong>Reservation System:</strong> Users can book a table, modify reservations, or cancel them with ease.</li>
                            <li><strong>User Authentication:</strong> Users can create an account, log in, and manage their profile and reservations.</li>
                            <li><strong>Restaurant Reviews:</strong> Users can rate restaurants and share their experiences with others.</li>
                            <li><strong>Admin Dashboard:</strong> Restaurant owners can manage reservations and reviews from the admin panel.</li>
                        </ul>
                        <p><strong>Challenges Faced and Solutions:</strong> Integrating the reservation system was challenging due to real-time updates and availability checks. We solved this by using MongoDB to track reservations in real-time and implemented WebSocket for updates.</p>
                        <p><strong>Screenshots/Demo Links:</strong> 
                            <a href="https://github.com/Portia-Nelly-Mashaba/restaurant-reservation-app-v2.git" target="_blank" rel="noopener noreferrer">GitHub</a>,  
                            <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default Collabs;
