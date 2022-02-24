import React from 'react';

import fullLogo from '../images/logo-green-2x.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-box">
        <img src={fullLogo} alt="full logo" className="footer-logo" />
      </div>

      <div>
        <div className="footer-list-container">
          <div>
            <ul className="footer-list">
              <li className="footer-item"><a href="#" className="footer-link">Company</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Contact us</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Carrers</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Privacy policy</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
