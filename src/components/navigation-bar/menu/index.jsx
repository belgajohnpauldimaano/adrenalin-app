import React, { useLayoutEffect, useState } from 'react'

export default function Menu({ openMenu, windowWidth }) {
  const isCollapsed = windowWidth < 600 && !openMenu;
  if (isCollapsed) return <></>
  return (
    <div className={`menu-container`}>
      <a href="#">Culture</a>
      <a href="#">Work</a>
      <a href="#">Clients</a>
      <a href="#">Services</a>
      <a href="#">Careers</a>
      <a href="#">Contact</a>
    </div>
  )
}
