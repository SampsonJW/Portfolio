import React from 'react';
import './About.css';
import { Button } from 'reactstrap';
import Resume from '../../resources/Sampson_Ward_CV_05_10.pdf'

function About() {
  return (
    <div id='about'>
      <div className='about-background'>
        <div className='about-header'>
          <h5 className='pb-4' style={{ color: '#fe7500' }}>
            About
          </h5>
          <h1>Nau mai haere mai.</h1>
          <p>Welcome</p>
        </div>
        <div className='about-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            est omnis iure consequuntur voluptate, cumque quo et doloribus
            repellat quae hic nisi, aperiam fuga repudiandae aliquid dolor
            nesciunt, modi autem. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Vitae aspernatur corporis voluptatibus animi illo
            natus ut doloribus quasi, nesciunt officiis inventore, architecto
            modi nobis magnam doloremque dolores quibusdam quae debitis.
          </p>
          <Button className='dlcv' href={Resume}>Download CV</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
