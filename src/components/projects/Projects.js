import React from 'react';
import './Projects.css';
import HolySpoke from '../../images/HSSS1.PNG';
import Police from '../../images/PPT.png';
import PathFinder from '../../images/PF.PNG';

function Projects() {
  return (
    <div id='projects' className='projects-bg'>
      <h5 className='projects-styler' style={{ color: '#fe7500' }}>
        Projects
      </h5>
      <div className='holy-spoke'>
        <h1>Holy Spoke</h1>
        <div className='content'>
          <img className='hs-image' src={HolySpoke} alt='' />

          <div className='desc'>
            <p>
              During lockdown, I focused my time on building a fully responsive static website for my stepfathers bike repair workshop in Hamilton central. 
              The main focus of doing this was to practice React hooks, 
              to see how well I could build a website from scratch and to test how well I can conform to strict design and functionality requests from clients.
              This has given me confidence that I am a capable Freelance Web Developer.  
            </p>
            <a href="https://holyspoke.co.nz/">holyspoke.co.nz</a>
          </div>
        </div>
      </div>
      <hr />
      <div className='nz-police'>
        <h1>New Zealand Police</h1>
        <div className='content'>
          <div className='desc'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non
              sint magni. Eum perferendis culpa veritatis totam rerum fugit
              magnam ad, vero doloremque ullam nihil molestias, atque corrupti,
              odit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque vitae, saepe voluptates minima nesciunt ipsum consequuntur
              delectus officiis sed necessitatibus nihil. Optio nulla mollitia
              animi ipsam facilis voluptatibus deleniti fugit.
            </p>
          </div>
          <img className='ppt-image' src={Police} alt='' />
        </div>
      </div>
      <hr />
      <div className='clojure-path'>
        <h1>Clojure Path Finder</h1>
        <div className='content'>
          <img className='pf-image' src={PathFinder} alt='' />

          <div className='desc'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non
              sint magni. Eum perferendis culpa veritatis totam rerum fugit
              magnam ad, vero doloremque ullam nihil molestias, atque corrupti,
              odit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque vitae, saepe voluptates minima nesciunt ipsum consequuntur
              delectus officiis sed necessitatibus nihil. Optio nulla mollitia
              animi ipsam facilis voluptatibus deleniti fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
