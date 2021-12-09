import React from 'react'
import {FoodCard, Categories} from '../../index'
import {useSelector} from 'react-redux'


export const FoodBlockCart = () => {
  const items = useSelector((state) => state.items);
  const cartItems = Object.keys(items).map((key) => items[key].items);
  console.log(cartItems);

  return (
    <section className="foodblock">
      <div className="foodblock-wrapper container">
        <h1 className="foodblock-title">Корзина</h1>
        <div className="foodblock-cards">
          {
            cartItems && cartItems.map((foodCard, index) => {
              console.log(foodCard)
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
