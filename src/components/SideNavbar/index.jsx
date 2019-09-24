// react libraries
import React from 'react';

// styles
import './SideNavbar.scss';

// component
import SidebarNavLink from '../SidebarNavLink';
import AppLogo from '../AppLogo';
import Button from '../Button';

// fixtures
import menuDatas from './fixture';

const SideNavbar = () => (
  <div className="side-nav-bar">
    <AppLogo />
    <ul className="side-nav-bar__menu">
      {menuDatas.map(({title, icon, path}, index)=> 
      <SidebarNavLink path={path} Icon={icon} title={title} key={index} /> )}
    </ul>
    <Button />
  </div>
)

export default SideNavbar;