import React, { useLayoutEffect, useState } from 'react'

export default function Menu({ openMenu, windowWidth }) {
  // const isCollapsed = windowWidth < 600 && !openMenu;
  // if (isCollapsed) return <></>
  return (
    <div className={`menu-container`}>
      <input type="checkbox" id="chk-menu-toggle" />
      <label htmlFor="chk-menu-toggle" className="lable-menu-toggle" >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>
        <ul>
          <li><a href="#">Culture</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}
