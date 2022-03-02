import React from 'react';

import '../styles/footer.scss';
import bigFullLogo from '../images/logo-green-2x.png';
import smallFullLogo from '../images/logo-green-1x.png';

import smallLogo from '../images/logo-green-small-1x.png';
import smallLogo2 from '../images/logo-green-small-2x.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-box">

        <picture>
          <source srcSet={`${smallLogo} 1x, ${smallLogo2}`} media='(max-width: 37.5em)'></source>
          <img src={smallFullLogo} srcSet={`${smallFullLogo} 1x, ${bigFullLogo} 2x`} alt="full logo" className="footer-logo" />
        </picture>

        
      </div>

      <div className="footer-text">
        <div className='col-1-of-2'>
          <div className="footer-navigation">
            <ul className="footer-list">
              <li className="footer-item"><a href="#" className="footer-link">Company</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Contact us</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Carrers</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Privacy policy</a></li>
              <li className="footer-item"><a href="#" className="footer-link">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className='col-1-of-2'>
          <p className="footer-copyright">Site feito por <a href='#' className="footer-link">Danielle Silva</a> no curso de <a href='#' className="footer-link">CSS avançado e Sass</a> fornecido pela Udemy e ministrado por <a href='#' className="footer-link">Jonas Schmedtmann</a></p>
        </div>
      </div>
    </footer>
  )
}
