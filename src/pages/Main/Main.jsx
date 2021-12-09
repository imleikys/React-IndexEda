import React, {useEffect, useState} from 'react'
import AppContext from '../../context';
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/actions/cart';
import {PromoSlider, 
  PromoBlock, 
  DeliveryBlock, 
  FoodBlock, 
  Benefits,
} from '../../components';


export const Main = () => {
  const [promoData, setPromoData] = useState(null);
  const [foodCards, setFoodCards] = useState(null);
  const [benefits, setBenefits] = useState(null);
  const [deliveryData, setDeliveryData] = useState(null);

  // const dispatch = useDispatch();
  // const onAddHandler = (item) => {
  //   console.log(item);
  //   dispatch(addItemToCart(item));
  // } 

  useEffect(() => {
    async function fetchData() {
      try {
        const [promoResponse, deliveryResponse, foodCardResponse, benefitsResponse] = await Promise.all([
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/promo/promoBlock.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/delivery.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/foodCards.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/benefits.json"),
        ]);

        setPromoData(promoResponse.data);
        setDeliveryData(deliveryResponse.data);
        setFoodCards(foodCardResponse.data);
        setBenefits(benefitsResponse.data);
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
        deliveryData,
        foodCards,
        benefits
      }
    }>
      <main className="main">
        <PromoSlider />
        <PromoBlock />
        <DeliveryBlock />
        <FoodBlock />
        <Benefits />
      </main>
    </AppContext.Provider>
  )
}
