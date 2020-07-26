import React from 'react';
import NavItem from '../NavItem/NavItem';
import { navLinks } from '../../constants/constants';

import './NavDesktop.css';

function NavDesktop() {
  const links = navLinks.map((link) => {
    return <NavItem key={link.id} path={link.path} text={link.text} />;
  });

  return (
    <nav className="nav">
      <ul className="nav-list">{links}</ul>
    </nav>
  );
}

export default NavDesktop;
