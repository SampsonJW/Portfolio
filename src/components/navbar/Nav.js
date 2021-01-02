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


  if (scrolled > 50) {
    nav = 'nav scrolled';
  }

  return (
    <Navbar className={nav}>
      <div className='items-box fade-in'>
        <NavItem className='nav-item about'>
          <a href='#about'>About</a>
        </NavItem>
        <NavItem className='nav-item project'>
          <a href='#projects'>Projects</a>
        </NavItem>
        <NavItem className='nav-item home'>
          <a href='#home' style={{ fontSize: '115%' }}>
            <i className='fas fa-home'></i>
          </a>
        </NavItem>
        <NavItem className='nav-item snake'>
          <a href='#snake'>Snake</a>
        </NavItem>
        <NavItem className='nav-item contact'>
          <a href='#contact'>Contact</a>
        </NavItem>
        <div className='line' />
      </div>
    </Navbar>
  );
}

export default Nav;
