import React from 'react';
import '../styling/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xovvgklz" method="POST">
        {/* FIX: added htmlFor/id pairs to link labels to their inputs */}
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;