import React from 'react'
// import { Icon } from '@iconify/react';
import mountain from '../images/landscape_white_24dp.svg';

import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
      {/* <Icon icon="lucide:mountain" /> */}
      <img src={mountain} alt='logo' className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors </span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href='#' className="btn btn--white btn--animated">Discover our tours</a>
      </div>

      
    </header>
  )
}