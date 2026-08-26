import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import '../styling/Contact.css';

function Contact() {
  return (
    <div className="contact">

      {/* Header */}
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>
          Have a project, opportunity, or idea you'd like to discuss?
          Feel free to get in touch.
        </p>
      </div>

      <div className="contact-content">

        {/* Contact Information */}
        <div className="contact-info contact-card">

          <h3>Let's Connect</h3>

          <p className="contact-description">
            I'm open to software development opportunities, internships,
            collaborations, and exciting projects.
          </p>

          {/* Email */}
          <div className="contact-detail">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <a href="mailto:nasiphisiphesihlendzumo@gmail.com">
                nasiphisiphesihlendzumo@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-detail">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <a href="tel:+27607570454">
                +27 60 757 0454
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-detail">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <p>Gauteng, South Africa</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">

            <a
              href="https://github.com/Siphe23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nasiphi-ndzumo-899354274"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Availability */}
          <div className="availability">
            <span className="status-dot"></span>
            <span>Open to opportunities and collaborations</span>
          </div>

        </div>

        {/* Formspree Contact Form */}
        <div className="contact-form contact-card">

          <h3>Send Me a Message</h3>

          <form
            action="https://formspree.io/f/xovvgklz"
            method="POST"
          >

            {/* Name */}
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            {/* Email */}
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />

            {/* Message */}
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
            ></textarea>

            {/* Submit */}
            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;