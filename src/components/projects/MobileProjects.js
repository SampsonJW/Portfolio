import React from 'react';
import './MobileProjects.css';
import HolySpoke from '../../images/HS.PNG';
import Police from '../../images/PPT.png';
import PathFinder from '../../images/PF.PNG';

function MobileProjects() {
  return (
    <div id="projects" className="projects-bg-mob">
      <h5 className="projects-styler" style={{ color: '#fe7500' }}>
        Projects
      </h5>
      <div className="holy-spoke-mob">
        <h1>Holy Spoke</h1>
        <div className="content-mob">
          <img className="hs-image-mob" src={HolySpoke} alt="" />

          <div className="desc-mob">
            <p>
              During lockdown, I focused my time on building a fully responsive
              static website for my stepfathers bike repair workshop in Hamilton
              central. The main focus of doing this was to practice React hooks,
              to see how well I could build a website from scratch and to test
              how well I can conform to strict design and functionality requests
              from clients. This has given me confidence in being a capable
              Freelance Web Developer.
            </p>
            <a href="https://holyspoke.co.nz/">holyspoke.co.nz</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="nz-police-mob">
        <h1>New Zealand Police</h1>
        <div className="content-mob">
          <img className="ppt-image-mob" src={Police} alt="" />
          <div className="desc-mob">
            <p>
              During University, I took the opportunity to work with the New
              Zealand Police to work on a concept of theirs. They proposed we
              build a website that would be used to tag images with relevent
              key-words. An officer could search a certain word and subsequently
              find similar images which can be linked and used to solve real
              life crimes. We worked in groups and tried our best to implement
              popular software developement methodologies. React and SQL are the
              technologies we used in our stack to complete this project.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="clojure-path">
        <h1>Clojure Path Finder</h1>
        <div className="content-mob">
          <img className="pf-image-mob" src={PathFinder} alt="" />

          <div className="desc-mob">
            <p>
              During university, my favourite assignments were building
              algorithms. From building LZW compression algorithms in Java, to
              Image processing algorithm in C++ to be run in parallel. Among my
              favourite was writing search algorithms in Clojure. This was my
              first introduction to functional languages which turned out to be
              a challenge but it is amongst some of the work I am most proud of.
              The algorithms implemented were Best First and A*.
            </p>
          </div>
        </div>
      </div>
      <div className="projects-icon">
        <a href="https://github.com/SampsonJW">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}

export default MobileProjects;
