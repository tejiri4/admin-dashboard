// react libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// style
import './SidebarMenu.scss';

const SidebarNavLink = ({ title, path, Icon }, index) => (
  <NavLink to={path} key={index}>
    <li className="sidebar-nav-link">
      <Icon />
      <p>{title}</p>
    </li>
  </NavLink>
);

export default SidebarNavLink;
