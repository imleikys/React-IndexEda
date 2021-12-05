import React, {useState } from 'react'
import {FoodCard, Categories} from '../../index'


export const FoodBlockCart = () => {
  const [cardsInCart, setCardsInCart] = useState(null);

  return (
    <section className="foodblock">
      <div className="foodblock-wrapper container">
        <h1 className="foodblock-title">Корзина</h1>
        <div className="foodblock-cards">
          {
            cardsInCart && cardsInCart.map((foodCard, index) => {
              return <FoodCard 
                img={foodCard.img}
                title={foodCard.title}
                descr={foodCard.descr}
                price={foodCard.price}
                weight={foodCard.weight}
              />
            })  
          }
        </div>
      </div>
    </section>
  )
}

export default FoodBlockCart;
