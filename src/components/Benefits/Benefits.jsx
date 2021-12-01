import React, {useContext} from 'react';
import {BenefitsCard} from '..';
import AppContext from '../../context';


export const Benefits = () => {
  const {benefits} = useContext(AppContext);

  return (
    <section className="benefits container">
      <h2 className="benefits-title">Наши преимущества</h2>
      <div className="benefits-cards">
        {
          benefits && benefits.map((benefit, index) => (
            <BenefitsCard 
              img={benefit.img} 
              title={benefit.title}
              descr={benefit.descr}
              key={index}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Benefits;
