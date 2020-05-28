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
      </div>
      <Menu openMenu={menuBarIsOpen} windowWidth={width} />
    </div>
  )
}
