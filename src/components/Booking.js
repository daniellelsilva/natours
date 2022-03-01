import React from 'react';
import '../styles/booking.scss';

export default function Booking() {
  return (
    <section className="section-book">
      <div className='div-book'>
        <div className="book">
         <div className="book-form">
           {/* title */}
          <div >
            <h2 className="heading-secondary" >
              Start booking now
           </h2>
         </div>
          {/* form */}
           <form className="form">

            <div className="form-group">
              <input className="form-input" type="text" placeholder="Full Name" id="name" required />
              <label htmlFor="name" className="form-label">Full Name</label>
            </div>

            <div className="form-group">
              <input className="form-input" type="email" placeholder="Email address" id="email" required />
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>

            <div className="form-group">
              <div className="form-radio-group">
                <input type="radio" className="form-radio-input" id="small" name="size"/>
                <label htmlFor="small" className="form-radio-label">
                  <span className="form-radio-btn"></span>
                  Small tour grup
                </label>
              </div>

              <div className="form-radio-group">
                <input type="radio" className="form-radio-input" id="large" name="size"/>
                <label htmlFor="large" className="form-radio-label">
                  <span className="form-radio-btn"></span>
                  Large tour grup
                </label>
              </div>
            </div>
                
            <div className="form-group">
              <button className="btn btn--green btn-next-step">Next step</button>
            </div>
             
           </form>
         </div>
        </div>
      </div>
    </section>
  )
}
