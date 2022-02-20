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
              <label for="name" className="form-label">Full Name</label>
            </div>

            <div className="form-group">
              <input className="form-input" type="email" placeholder="Email address" id="email" required />
              <label for="email" className="form-label">Email Address</label>
            </div>
                
             
           </form>
         </div>
        </div>
      </div>
    </section>
  )
}
