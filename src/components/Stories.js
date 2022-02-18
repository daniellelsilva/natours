import React from 'react';
import maryImage from '../images/nat-8.jpg';
import jackImage from '../images/nat-9.jpg';

import '../styles/stories.scss';

export default function Stories() {
  return (
    <section className="stories-section">
      <div className="u-center-text">
          <h2 className="heading-secondary" >
            We make people genuinely happy
          </h2>
        </div>

        <div className="stories-div">
          <div className="story">
            <figure className="story-shape">
              <img className="story-image" src={maryImage} alt="persoan on a tour" />
              <figcaption className="story-caption">Mary Smith</figcaption>
            </figure>
            <div className="story-text">
              <h3 className="heading-tertiary">I had the best week ever with my family</h3>
              <p>Lorem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis! Ut velit rerum quo facere consequatur id culpa necessitatibus non reprehenderit mollitia est ipsum enim est tenetur pariatur. Id laborum voluptas et error illo ut necessitatibus dolore ut internos perferendis et esse sunt eos galisum ipsum 33 illo praesentium.</p>
            </div>
          </div>

          <div className="story">
            <figure className="story-shape">
              <img className="story-image" src={jackImage} alt="persoan on a tour" />
              <figcaption className="story-caption">Jack Wilson</figcaption>
            </figure>
            <div className="story-text">
              <h3 className="heading-tertiary">WOW! My life is completely different now</h3>
              <p>Lorem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis! Ut velit rerum quo facere consequatur id culpa necessitatibus non reprehenderit mollitia est ipsum enim est tenetur pariatur. Id laborum voluptas et error illo ut necessitatibus dolore ut internos perferendis et esse sunt eos galisum ipsum 33 illo praesentium.</p>
            </div>
          </div>
        </div>

        <div className="u-center-text">
          <a href="#" className="btn-text all-stories-btn"> Read all stories</a>
        </div>

    </section>
  )
}
