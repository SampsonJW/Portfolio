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
        <NavItem className='nav-item'>Projects</NavItem>
        <NavItem className='nav-item'>
          <strong>NAME</strong>
        </NavItem>
        <NavItem className='nav-item'>Resume</NavItem>
      </div>
    </Navbar>
  );
}

export default Nav;
