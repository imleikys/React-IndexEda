import React, {useEffect, useState} from 'react'
import AppContext from '../../context';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import {PromoSlider, 
  PromoBlock, 
  DeliveryBlock, 
  FoodBlock, 
  Benefits,
  Modal,
} from '../../components';
import { setBenefits, setDelivery, setFoodCards, setPromo } from '../../redux/actions/response';


export const Main = () => {
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const [promoResponse, deliveryResponse, foodCardResponse, benefitsResponse] = await Promise.all([
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/promo/promoBlock.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/delivery.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/foodCards.json"),
          axios.get("https://react-indexeda-default-rtdb.europe-west1.firebasedatabase.app/benefits.json"),
        ]);

        dispatch(setPromo(promoResponse.data));
        dispatch(setDelivery(deliveryResponse.data));
        dispatch(setFoodCards(foodCardResponse.data));
        dispatch(setBenefits(benefitsResponse.data));
      } catch (e) {
        alert(e);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <AppContext.Provider value={
      {
        isModalActive,
        setIsModalActive
      }
    }>
      <main className="main">
        <Modal />
        <PromoSlider />
        <PromoBlock />
        <DeliveryBlock />
        <FoodBlock />
        <Benefits />
      </main>
    </AppContext.Provider>
  )
}
