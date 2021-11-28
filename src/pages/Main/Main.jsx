import React, {useEffect, useState} from 'react'
import {PromoSlider} from '../../components/PromoSlider/PromoSlider'
import {PromoBlock} from '../../components/PromoBlock/PromoBlock'
import {DeliveryBlock} from '../../components/DeliveryBlock/DeliveryBlock';
import {FoodBlock} from '../../components/FoodBlock/FoodBlock';
import AppContext from '../../context';
import axios from 'axios'


export const Main = (props) => {

  const [promoData, setPromoData] = useState(null);
  const [deliveryData, setDeliveryData] = useState(null);
  const [foodCards, setFoodCards] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [promoResponse, deliveryResponse, foodCardResponse] = await Promise.all([
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/promo/promoBlock.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/delivery.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/foodCards.json")
        ]);

        setPromoData(promoResponse.data);
        setDeliveryData(deliveryResponse.data);
        setFoodCards(foodCardResponse.data);
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
  }, []);

  console.log(foodCards);

  return (
    <AppContext.Provider value={
      {
        promoData,
        deliveryData,
        foodCards
      }
    }>
      <main className="main">
        <PromoSlider />
        <PromoBlock />
        <DeliveryBlock />
        <FoodBlock />
      </main>
    </AppContext.Provider>
  )
}
