import React from 'react';
import './Footer.css';

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer-bg">
      <div className="footer-content">
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i>
          Copyright {currentYear} Sampson Ward
        </p>
      </div>
    </div>
  );
}

export default Footer;
