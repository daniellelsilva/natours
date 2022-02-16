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
          <div className="card">
            <div className="card-side card-side-front">
              <p>FRONT</p>
            </div>
            <div className="card-side card-side-back card-side-back-1">
              <p>BACK</p>
            </div>
            
          </div>

          <div className="card">
          <p>card 2</p>
          </div>

          <div className="card">
          <p>card 3</p>
          </div>
        </div>
    </section>
  )
}
