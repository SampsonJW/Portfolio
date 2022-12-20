import React from 'react';
import './MobileContact.css';

function MobileContact() {
  return (
    <div id="contact">
      <div className="contact-bg-mob">
        <div className="contact-header-mob">
          <h5 className="pb-4" style={{ color: '#fe7500' }}>
            Contact
          </h5>
          <h2>I'd love to hear from you</h2>
        </div>
        <div className="contact-content-mob">
          <div className="contact-item-mob">
            <a href="tel:+64225144228">
              <i className="fas fa-mobile contact-icon-mob"></i>
              <p>Call me</p>
              +64 22 514 4228
            </a>
          </div>
          <div className="contact-item-mob">
            <a href="mailto:sampsondraw@gmail.com">
              <i className="fas fa-envelope contact-icon-mob"></i>
              <p>Email me</p>
              sampsondraw@gmail.com
            </a>
          </div>
          <div className="contact-item-mob">
            <a href="https://www.linkedin.com/in/sampson-ward/">
              <i className="fab fa-linkedin-in contact-icon-mob"></i>
              <div>
                <p>Connect with me</p>
                linkedin.com/in/sampson-ward/
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileContact;
