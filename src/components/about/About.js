import React from 'react';
import './About.css';
import { Button } from 'reactstrap';
import Resume from '../../resources/Sampson_Ward_CV_05_10.pdf';
import { isMobile } from 'react-device-detect';
import MobileAbout from './MobileAbout';
function About() {
  if (isMobile) {
    return <MobileAbout />;
  } else {
    return (
      <div id="about">
        <div className="about-background">
          <div className="about-header">
            <h5
              className="pb-4"
              style={{ fontWeight: '600', color: '#fe7500' }}
            >
              About
            </h5>
            <h1>Nau mai haere mai.</h1>
            <p>Welcome</p>
          </div>
          <div className="about-content">
            <p>
              I am Sampson Ward, a passionate Junior Developer and tech
              enthusiast. I proudly graduated in December of 2019 with a BSc
              Majoring in Computer Science from the University of Waikato,
              Hamilton, New Zealand.
            </p>
            <p>
              My passion for Computer Science is rooted in Web Development and
              Design. I love brainstorming effective solutions for real world
              problems and being a part of progressing the world into a more
              efficient place.
            </p>
            <p>
              I hope you enjoy your time here on my own little slice of the
              internet!
            </p>
            <p>
              Feel free to reach out to me <a href="#contact">here</a>.
            </p>
            <Button className="dlcv" href={Resume}>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
