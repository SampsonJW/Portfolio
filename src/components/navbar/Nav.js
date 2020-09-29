import React from 'react';
import { Navbar, NavItem } from 'reactstrap';
import './Nav.css';

function Nav() {
  return (
    <Navbar className='nav-whole'>
      <div className='items-box'>
        <NavItem className='nav-item'> Sampson Ward</NavItem>
        <NavItem className='nav-item'> Sampson Ward</NavItem>
        <NavItem className='nav-item'> Sampson Ward</NavItem>
      </div>
    </Navbar>
  );
}

export default Nav;
