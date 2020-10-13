import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div>
      <div id='home' className='background'>
        <div className='details'>
          <h1 className='name mb-4'>Sampson Ward</h1>
          <h3 className='description'>
            Web Developer | Software Engineer | IT Enthusiast
          </h3>
          <h6>Background Image: Asakusa, Tokyo, Japan</h6>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/sampson-ward/'>
              <i className='fab fa-linkedin-in' />
            </a>
            <a href='https://github.com/SampsonJW'>
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
