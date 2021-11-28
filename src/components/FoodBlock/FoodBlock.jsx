import React, { useContext, useState } from 'react'
import {FoodCard} from './FoodCard/FoodCard'
import {Categories} from '../Categories/Categories'
import AppContext from '../../context'


export const FoodBlock = (props) => {
  const {foodCards} = useContext(AppContext);
  const [cardsForRender, setCardsForRender] = useState(3);

  return (
    <section className="foodblock">
      <div className="foodblock-wrapper container">
        <Categories />
        <div className="foodblock-cards">
          {
            foodCards && foodCards.map((foodCard, index) => {
              if (index <= cardsForRender) {
                return <FoodCard 
                  img={foodCard.img}
                  title={foodCard.title}
                  descr={foodCard.descr}
                  price={foodCard.price}
                  weight={foodCard.weight}
                />
              } else {
                return null
              }
            })  
          }
        </div>
        <button className="button button-outline button-big" onClick={() => setCardsForRender(cardsForRender + 4)}>Больше блюд</button>
      </div>
    </section>
  )
}
