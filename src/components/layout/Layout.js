import React from 'react';
import Landing from '../landing/Landing';
import About from '../about/About';
import Projects from '../projects/Projects';
import Snake from '../snake/Snake';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Snake />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
