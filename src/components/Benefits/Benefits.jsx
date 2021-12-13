import React from 'react';
import {useSelector} from 'react-redux';
import {BenefitsCard} from '..';


export const Benefits = () => {
  const benefits = useSelector(({response}) => response.benefits);

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
