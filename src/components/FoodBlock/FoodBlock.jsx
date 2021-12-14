import React, {useState} from 'react'
import {FoodCard, Categories} from '../index'
import {useSelector} from 'react-redux';


export const FoodBlock = ({withoutCategories}) => {
  const [cardsForRender, setCardsForRender] = useState(3);
  const foodCards = useSelector(({response}) => response.foodCards);

  const filter = useSelector(({filter}) => filter.filter);
  const filteredCards = filter !== 'default' ? foodCards.filter((foodCard) => foodCard.type === filter) : foodCards;

  return (
    <section className="foodblock">
      <div className="foodblock-wrapper container">
        {
          withoutCategories ? null : <Categories />
        }
        <div className="foodblock-cards">
          {
            filteredCards && filteredCards.map((foodCard, index) => {
              if (index <= cardsForRender) {
                return <FoodCard 
                  img={foodCard.img}
                  title={foodCard.title}
                  descr={foodCard.descr}
                  price={foodCard.price}
                  weight={foodCard.weight}
                  id={foodCard.id}
                  key={foodCard.id}
                />
              } else {
                return null
              }
            })  
          }
        </div>
        { filteredCards && 
          cardsForRender + 1 < filteredCards.length ? 
            <button className="button button-outline button-big" onClick={() => setCardsForRender(cardsForRender + 4)}>Больше блюд</button> :
            null}
      </div>
    </section>
  )
}

export default FoodBlock;
