import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/abstracts/utilities.scss';
import '../styles/components/button.scss';

import '../styles/about.scss';

import nature1 from '../images/nat-1-large.jpg';
import nature1small from '../images/nat-1.jpg';
import nature2 from '../images/nat-2-large.jpg';
import nature2small from '../images/nat-2.jpg';
import nature3 from '../images/nat-3-large.jpg';
import nature3small from '../images/nat-3.jpg';

export default function About() {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text">
          <h2 className="heading-secondary" id="about">
            Exciting tours for adventurous people
          </h2>
        </div>
        
        <section className="about-text-image-content">
          <div className="text-content">
            <h3 className="heading-tertiary">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">Lorem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis! Ut velit rerum quo facere consequatur id culpa necessitatibus non reprehenderit mollitia est ipsum enim est tenetur pariatur. Id laborum voluptas et error illo ut necessitatibus dolore ut internos perferendis et esse sunt eos galisum ipsum 33 illo praesentium. </p>

            <h3 className="heading-tertiary">
              Live adventure like you never have before
            </h3>
            <p className="paragraph">Aut vero delectus vel accusamus consequatur qui magni itaque et molestias ipsa est assumenda asperiores. Qui sunt expedita quo quos ipsum et saepe dolorum et consequatur ratione. </p>

            <a className="btn-text" href="#">
              Learn more
              <Icon icon="akar-icons:arrow-right" className="btn-arrow" />
            </a>
          </div>

          <div className="image-content">
            <div className="composition">
              <img
                src={nature1}
                srcSet={`${nature1small} 300w, ${nature1} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px"
                alt="Nature 1"
                className='composition__photo composition__photo--p1'
              />

              <img
                src={nature2}
                srcSet={`${nature2small} 300w, ${nature2} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px"
                alt="Nature 2"
                className='composition__photo composition__photo--p2'
              />

              <img
                src={nature3}
                srcSet={`${nature3small} 300w, ${nature3} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px"
                alt="Nature 3"
                className='composition__photo composition__photo--p3'
              />

              {/* <img src={nature1} alt="Nature 1" className='composition__photo composition__photo--p1' />
              <img src={nature2} alt="Nature 2" className='composition__photo composition__photo--p2' />
              <img src={nature3} alt="Nature 3" className='composition__photo composition__photo--p3' /> */}
            </div>
          </div>

        </section>

      </section>
    </main>
  )
}
