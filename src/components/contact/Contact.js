import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <div className="contact-bg">
        <div className="contact-header">
          <h5 className="pb-4" style={{ color: '#fe7500' }}>
            Contact
          </h5>
          <h1>I'd love to hear from you.</h1>
        </div>
        <div className="contact-content">
          <div className="contact-item">
            <a href="tel:+64225144228">
              <i className="fas fa-mobile contact-icon"></i>
              <h3>Call me</h3>
              +64 22 514 4228
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:sampsondraw@gmail.com">
              <i className="fas fa-envelope contact-icon"></i>
              <h3>Email me</h3>
              sampsondraw@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/sampson-ward/">
              <i className="fab fa-linkedin-in contact-icon"></i>
              <div>
                <h3>Connect with me</h3>
                linkedin.com/in/sampson-ward/
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
