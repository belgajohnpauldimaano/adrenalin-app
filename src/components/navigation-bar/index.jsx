import React, { useContext } from 'react'

import Menu from './menu';
import Logo from "./../logo";
import './NavigationBar.sass';

import useGetWidth from './../../hooks/useGetWindowWidth';

import { AppContext } from "./../../context";
export default function NavigationBar() {
  const { menuBarIsOpen, toggleMenu } = useContext(AppContext);
  const { width } = useGetWidth();
  
  return (
    <div className="nav-bar">
      <div className="title-container">
        <Logo />
        {width < 600 && 
        <span className={`${menuBarIsOpen ? 'clicked' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </span>}
      </div>
      <Menu openMenu={menuBarIsOpen} windowWidth={width} />
    </div>
  )
}
