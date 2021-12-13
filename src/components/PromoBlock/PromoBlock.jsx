import React from 'react';
import {PromoBlockCard} from '..';
import {useSelector} from 'react-redux';


export const PromoBlock = () => {
  const promoData = useSelector(({response}) => response.promo);

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
            type={block.type}
            key={index}
          />
        ))
      }
    </div>
  )
}

export default PromoBlock;
