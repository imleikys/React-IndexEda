import React, {useState} from 'react'
import {FoodCard, Categories} from '../index'
import {useSelector} from 'react-redux';

const CheckFilters = (filterType, nameFilter, foodCards, filter) => {
  if (filterType === 'default' && nameFilter === '') {
    return foodCards;
  } 

  if (filterType !== 'default') {
    return foodCards.filter((foodCard) => foodCard.type === filter)
  }

  if (nameFilter !== '') {
    return foodCards.filter((foodCard) => foodCard.title.toLowerCase().includes(nameFilter.toLowerCase()));
  }
}

export const FoodBlock = ({withoutCategories}) => {
  const [cardsForRender, setCardsForRender] = useState(3);
  const foodCards = useSelector(({response}) => response.foodCards);

  const filter = useSelector(({filter}) => filter.filter);
  const filterType = useSelector(({filter}) => filter.filterType);
  const nameFilter = useSelector(({filter}) => filter.nameFilter);
  const filteredCards = CheckFilters(filterType, nameFilter, foodCards, filter);

  

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
