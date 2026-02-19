import React from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="main-content">
      {/* Added contact-title class for the larger font and spacing */}
      <h2 className="section-title center contact-title">Get In Touch</h2>
      
      <div className="contact-split">
        {/* Left Side: Message Form */}
        <div className="card contact-card">
          <h3 className="subsection-header">Send a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" className="minimal-input" />
            </div>
            
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="email@example.com" className="minimal-input" />
            </div>
            
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="How can I help?" className="minimal-input" rows="5"></textarea>
            </div>
            
            <button type="submit" className="project-button contact-submit">
              <Send size={18} style={{ marginRight: '8px' }} />
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Direct Connection */}
        <div className="card contact-card">
          <h3 className="subsection-header">Connect With Me</h3>
          <div className="connect-content">
            <p className="about-para" style={{ marginBottom: '2.5rem' }}>
              Whether you have a question about my projects or just want to chat about AI, 
              Software Engineering, or Product—my inbox is always open.
            </p>
            
            <div className="contact-info-list">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:adithvasu978@gmail.com" className="contact-link">adithvasu978@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-link">+1 (123) 456-7890</span>
                </div>
              </div>

              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/adithvasu" target="_blank" rel="noreferrer" className="contact-link">linkedin.com/in/adithvasu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;