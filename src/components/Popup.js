import React from 'react';

import nat8 from '../images/nat-8.jpg';
import nat9 from '../images/nat-9.jpg';

import '../styles/popup.scss';

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup-content">
        <div className="popup-left">
          <img src={nat8} alt="tour images" className="popup-image" />
          <img src={nat9} alt="tour images" className="popup-image" />
        </div>

        <div className="popup-right">
          <a href="#section-tours" className="popup-close">X</a>
          <h2 className="heading-secondary margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary margin-bottom-small">Importante: Please read these terms before booking</h3>
          <p className="popup-text margin-bottom-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. At consectetur lorem donec massa sapien. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Etiam sit amet nisl purus in mollis nunc sed id. Lectus proin nibh nisl condimentum id. Quam lacus suspendisse faucibus interdum. Fermentum dui faucibus in ornare quam viverra orci sagittis. In cursus turpis massa tincidunt dui. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Dolor sit amet consectetur adipiscing elit. Convallis aenean et tortor at risus. Senectus et netus et malesuada fames ac turpis egestas.</p>
          <a className="btn btn--green" href="#">Book now</a>
        </div>
      </div>
    </div>
  )
}
