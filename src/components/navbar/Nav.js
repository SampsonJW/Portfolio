import React, { useEffect, useState } from 'react';
import { Navbar, NavItem } from 'reactstrap';
import './Nav.css';

function Nav() {
  let nav = 'nav';
  const [scrolled, setScrolled] = useState();

  const handleScroll = () => {
    setScrolled(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  if (scrolled > 0) {
    nav = 'nav scrolled';
  }

  return (
    <Navbar className={nav}>
      <div className='items-box'>
        <NavItem className='nav-item project'>
          <a href='#'>Projects</a>
        </NavItem>
        <NavItem className='nav-item name'>
          <a href='#'>
            <strong>SAMPSON WARD</strong>
          </a>
        </NavItem>
        <NavItem className='nav-item resume'>
          <a href='#'>Resume</a>
        </NavItem>
        <div className='line' />
      </div>
    </Navbar>
  );
}

export default Nav;
