import React from 'react';
import './About.css';
import { Button } from 'reactstrap';
import Resume from '../../resources/Sampson_Ward_CV_05_10.pdf'

function About() {
  return (
    
    <div id='about'>
      <div className='about-background'>
        <div className='about-header'>
          <h5 className='pb-4' style={{   fontWeight: '600', color: '#fe7500' }}>
            About
          </h5>
          <h1>Nau mai haere mai.</h1>
          <p>Welcome</p>
        </div>
        <div className='about-content'>
          <p>
            I am Sampson Ward, a passionate Junior Developer and tech enthusiast. I proudly graduated in December of 2019 with a BSc Majoring in Computer Science from the University of Waikato, Hamilton, New Zealand.
            
          </p>
          <p>I Currently work as a Junior Support Developer at COMS Systems LTD. Helping to smash bugs, write clean concise documentation and beautiful scalable code.</p>
          <p>My passion for Computer Science is rooted in Web Development and Design, brainstorming effective solutions for real world problems and being a part of progressing the world into a more efficient place.</p>
          <Button className='dlcv' href={Resume}>Download CV</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
