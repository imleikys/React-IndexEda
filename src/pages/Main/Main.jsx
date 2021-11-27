import React, {useEffect, useState} from 'react'
import {PromoSlider} from '../../components/PromoSlider/PromoSlider'
import {PromoBlock} from '../../components/PromoBlock/PromoBlock'
import {DeliveryBlock} from '../../components/DeliveryBlock/DeliveryBlock';
import AppContext from '../../context';
import axios from 'axios'


export const Main = (props) => {

  const [promoData, setPromoData] = useState(null);
  const [deliveryData, setDeliveryData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [promoResponse, deliveryResponse] = await Promise.all([
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/promo/promo-block.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/delivery.json")
        ]);

        setPromoData(promoResponse.data);
        setDeliveryData(deliveryResponse.data);
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
    
  }, []);

  return (
    <AppContext.Provider value={
      {
        promoData,
        deliveryData
      }
    }>
      <main className="main">
        <PromoSlider />
        <PromoBlock />
        <DeliveryBlock />
      </main>
    </AppContext.Provider>
  )
}
