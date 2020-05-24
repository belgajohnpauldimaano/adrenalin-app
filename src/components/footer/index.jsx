import React from 'react'

import FooterMenu from './footer-menu';
import Logo from './../logo';
import './Footer.sass';

export default function Footer() {
  return (
    <div className="footer-container" >
      <hr />
      <Logo />
      <FooterMenu />
    </div>
  )
}
