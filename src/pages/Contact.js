import React, { useState } from 'react'; // <--- Make sure this line is exactly here
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import '../styling/Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="bg-shapes-contact">
        <div className="blob-contact blob-1"></div>
        <div className="blob-contact blob-2"></div>
      </div>

      <motion.div 
        className="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <h2><span>Let's Connect</span></h2>
          <p className="contact-intro">
            Have an opportunity, project idea, or just want to connect? I'd love to hear from you. 
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side: Info Card */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Connect with me</h3>
            <p>Let's build something meaningful together.</p>
            
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:siphesihlemzamane@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

            <div className="direct-contact">
              <p><strong>Email:</strong> siphesihlemzamane@gmail.com</p>
              <p><strong>Phone:</strong> 060 757 0454</p>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.form 
            action="https://formspree.io/f/xovvgklz" 
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" placeholder="What would you like to discuss?" required />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" disabled={status === 'sending'} className="submit-btn">
              {status === 'sending' ? 'Sending...' : 'Send Message'} 
              {status !== 'sending' && <FaPaperPlane className="send-icon" />}
            </button>

            {status === 'success' && (
              <p className="form-status success">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Oops! Something went wrong. Please try again or email me directly.</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;