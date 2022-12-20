import React from 'react';
import Landing from '../landing/Landing';
import About from '../about/About';
import Projects from '../projects/Projects';
import Snake from '../snake/Snake';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import NavBar from '../navbar/Nav';
import { isMobile } from 'react-device-detect';

function Layout() {
  let nav;
  let snake;
  if (!isMobile) {
    nav = <NavBar />;
    snake = <Snake />;
  }

  return (
    <div>
      {nav}
      <Landing />
      <About />
      <Projects />
      {snake}
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
