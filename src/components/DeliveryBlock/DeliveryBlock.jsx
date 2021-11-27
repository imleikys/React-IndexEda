import React, {useContext} from 'react';
import {DeliveryBlockCard} from './DeliveryBlockCard/DeliveryBlockCard';
import AppContext from '../../context';


export const DeliveryBlock = () => {
  const {deliveryData} = useContext(AppContext);

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