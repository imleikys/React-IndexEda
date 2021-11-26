import React, { useState } from 'react';
import axios from 'axios';
import {PromoBlockCard} from './PromoBlockCard/PromoBlockCard';
import {useEffect} from 'react';


export const PromoBlock = () => {

  const [promoData, setPromoData] = useState(null); 
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/promo/promo-block.json');
        setPromoData(response.data);
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
  }, []);


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
