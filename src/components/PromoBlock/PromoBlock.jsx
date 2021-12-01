import React, {useContext} from 'react';
import AppContext from '../../context';
import {PromoBlockCard} from '..';


export const PromoBlock = () => {
  const {promoData} = useContext(AppContext);

  return (
    <div className="main-promo container">
      {
        promoData && promoData.map((block, index) => (
          <PromoBlockCard 
            title={block.title}
            price={block.price}
            img={block.img}
            deliveryPrice={block.deliveryPrice}
            descr={block.descr}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default PromoBlock;
