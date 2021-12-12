import React from 'react'
import {FoodCardCart} from '../index';
import {useSelector} from 'react-redux'


export const FoodBlockCart = () => {
  const items = useSelector(({CartReducer}) => CartReducer.items);
  const cartItems = Object.keys(items).map((key) => items[key].items);

  return (
    <section className="foodblock">
      <div className="foodblock-wrapper container">
        <h1 className="foodblock-title">Корзина</h1>
        <div className="foodblock-cards">
          {
            cartItems && cartItems.map((foodCard, index) => {
              return <FoodCardCart 
                img={foodCard.img}
                title={foodCard.title}
                descr={foodCard.descr}
                price={foodCard.price}
                weight={foodCard.weight}
                id={foodCard.id}
                key={foodCard.id}
              />
            })  
          }
        </div>
        {
          cartItems.length !== 0 ? <button className="button button-outline button-big">Оформить заказ</button> : null
        }
      </div>
    </section>
  )
}

export default FoodBlockCart;
