import React from 'react';

import '../styles/menu.scss';

export default function Menu() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation-checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="navigation-btn"><span className="navigation-icon"></span></label>

      <div className="navigation-background" />

      <nav className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item"><a href='#' className="navigation-link"><span>01</span>About Natours</a></li>
          <li className="navigation-item"><a href='#' className="navigation-link"><span>02</span>Your benefits</a></li>
          <li className="navigation-item"><a href='#' className="navigation-link"><span>03</span>Popular tours</a></li>
          <li className="navigation-item"><a href='#' className="navigation-link"><span>04</span>Stories</a></li>
          <li className="navigation-item"><a href='#' className="navigation-link"><span>05</span>Book now</a></li>
        </ul>
      </nav>
    </div>
  )
}
