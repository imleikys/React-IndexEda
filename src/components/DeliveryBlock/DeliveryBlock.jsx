import React from 'react';
import { useSelector } from 'react-redux';
import {DeliveryBlockCard} from '..';


export const DeliveryBlock = () => {
  const deliveryData = useSelector(({response}) => response.delivery);

  return (
    <section className="delivery-week container">
      <h2 className="delivery-title">Доставка готовой еды на неделю</h2>
      <div className="delivery-cards">
        {
          deliveryData && deliveryData.map((card, index) => {
            return <DeliveryBlockCard 
              title={card.title}
              img={card.img}
              className={card.className}
              key={index} 
            />
          })
        }
      </div>
    </section>
  );
}

export default DeliveryBlock;
