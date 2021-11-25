import React from 'react'
import {PromoBlockCard} from './PromoBlockCard/PromoBlockCard';

import promoImg1 from '../../assets/img/promo1.png';
import promoImg2 from '../../assets/img/promo2.png';

export const PromoBlock = () => {
  return (
    <div className="main-promo container">
      <PromoBlockCard img={promoImg1} />
      <PromoBlockCard img={promoImg2} />
    </div>
  )
}
