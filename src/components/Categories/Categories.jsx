import React, {useState} from 'react'

export const Categories = () => {
  const categories = ['Популярные блюда', 'Овощное', 'Мясное'];
  const [activeCategory, setActiveCategory] = useState(0); 

  return (
    <>
      <h2 className="categories-title">Категории блюд</h2>
      <ul className="categories-tabs">
        {
          categories.map((category, index) => (
            <li 
              className={`categories-tab ${activeCategory === index ? 'active' : null}`}
              onClick={() => setActiveCategory(index)}
              key={index}
            >{category}</li>
          ))
        }
      </ul>
    </>
  )
}
