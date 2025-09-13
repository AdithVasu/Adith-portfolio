import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-container-narrow">
        <h2 className="section-title">
          Let's Connect
        </h2>
        
        <div className="grid-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.75rem' }}>
                Email
              </h3>
              <p style={{ fontSize: '1.125rem' }}>a.vasudevan@wustl.edu</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.75rem' }}>
                Phone
              </h3>
              <p style={{ fontSize: '1.125rem' }}>+1 707-835-4331</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.75rem' }}>
                Location
              </h3>
              <p style={{ fontSize: '1.125rem' }}>St. Louis, Missouri</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.75rem' }}>
                Availability
              </h3>
              <p style={{ fontSize: '1.125rem' }}>Open to internship and full-time opportunities</p>
            </div>
          </div>
          
          <div className="form-container">
            <h3 className="form-title">Send me a message</h3>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name"
                className="form-input"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="form-input"
              />
              <input 
                type="text" 
                placeholder="Subject"
                className="form-input"
              />
              <textarea 
                placeholder="Your Message" 
                rows={6}
                className="form-textarea"
              />
              <button className="form-button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;