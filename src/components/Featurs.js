import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/featurs.scss';

export default function Featurs() {
  return (
    <section className="section-featurs">
      <div className="featurs-individual-card">
        <Icon icon="fontisto:world-o" className="featurs-icon" />
        <h3 className="heading-tertiary">Explore the world</h3>
        <p>orem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis!</p>
      </div>

      <div className="featurs-individual-card">
        <Icon icon="et:compass" className="featurs-icon" />
        <h3 className="heading-tertiary">Meet nature</h3>
        <p>orem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis!</p>
      </div>

      <div className="featurs-individual-card">
        <Icon icon="bi:map" className="featurs-icon" />
        <h3 className="heading-tertiary">Find your way</h3>
        <p>orem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis!</p>
      </div>

      <div className="featurs-individual-card">
        <Icon icon="bi:heart" className="featurs-icon" />
        <h3 className="heading-tertiary">Live a helthier life</h3>
        <p>orem ipsum dolor sit amet. Aut quia cumque sed suscipit vitae qui porro veniam aut possimus adipisci hic sint eveniet sed dolor officiis!</p>
      </div>
            
    </section>
  )
}
