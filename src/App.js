import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Skills from './pages/Skills'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 
import Group from './pages/Group';
import Assessment from './pages/Assesments'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/assessment" element={<Assessment />} /> {/* Ensure the route matches */}
        <Route path="/group" element={<Group />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;