import React from 'react';
import './MobileLanding.css';
function MobileLanding() {
  return (
    <div>
      <div>
        <div id="home" className="background-mobile">
          <div className="details-mobile">
            <h1 className="name mb-4">Sampson Ward</h1>
            <p className="description">
              Web Developer | Software Engineer | IT Enthusiast
            </p>
            <div className="icons-mobile">
              <a href="https://www.linkedin.com/in/sampson-ward/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/SampsonJW">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLanding;
