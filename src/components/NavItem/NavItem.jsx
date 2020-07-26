import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

function NavItem({ path, text }) {
  return (
    <li className="nav-item">
      <NavLink exact to={path} className="nav-link">
        {text}
      </NavLink>
    </li>
  );
}

export default NavItem;
