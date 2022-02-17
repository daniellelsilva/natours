import React from 'react';

import '../styles/tours.scss';

export default function Tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text">
          <h2 className="heading-secondary" >
            Most popular tours
          </h2>
        </div>

        <div className="tours-cards">
          {/* CARTA 1 */}
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-1" />
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-1">
                  The sea explorer
                </span>
              </h4>
              <div className="card-details">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-1">
              <div className="card-cta">
                <div className="card-price-box">
                  <p className="card-price-only">Only</p>
                  <p className="card-price-value">$297</p>
                </div>
                <a href="#" className="btn btn--white">Book Now!</a>
              </div>
            </div>
            
          </div>

          {/* CARTA 2 */}
          <div className="card">
          <div className="card-side card-side-front">
              <div className="card-picture card-picture-2" />
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-2">
                  The forest hiker
                </span>
              </h4>
              <div className="card-details">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-2">
              <div className="card-cta">
                <div className="card-price-box">
                  <p className="card-price-only">Only</p>
                  <p className="card-price-value">$497</p>
                </div>
                <a href="#" className="btn btn--white">Book Now!</a>
              </div>
            </div>
          </div>

          {/* CARTA 3 */}
          <div className="card">
          <div className="card-side card-side-front">
              <div className="card-picture card-picture-3" />
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-3">
                  The snow adventurer
                </span>
              </h4>
              <div className="card-details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-3">
              <div className="card-cta">
                <div className="card-price-box">
                  <p className="card-price-only">Only</p>
                  <p className="card-price-value">$897</p>
                </div>
                <a href="#" className="btn btn--white">Book Now!</a>
              </div>
            </div>
          </div>
        </div>

        <div className="u-center-text">
          <a href="#" className="btn btn--green discover-tours"> Discover all tours</a>
        </div>

    </section>
  )
}
