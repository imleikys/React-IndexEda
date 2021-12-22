import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {setFilterType} from '../../redux/actions/filters';
import {useEffect} from 'react';


export const Categories = () => {
  const categories = ['Популярные блюда', 'Овощное', 'Мясное'];
  const [activeCategory, setActiveCategory] = useState(0); 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilterType('default'));
  }, [dispatch]);

  const onClickHandler = (index) => {
    setActiveCategory(index);

    switch(index) {
      case 0: {
        dispatch(setFilterType('default'));
        break;
      }
      case 1: {
        dispatch(setFilterType('type', 'tag-veg'));
        break;
      }
      case 2: {
        dispatch(setFilterType('type', 'tag-meat'));
        break;
      }

      default:;
    }
  }

  return (
    <>
      <h2 className="categories-title">Категории блюд</h2>
      <ul className="categories-tabs">
        {
          categories.map((category, index) => (
            <li 
              className={`categories-tab ${activeCategory === index ? 'active' : null}`}
              onClick={() => onClickHandler(index)}
              key={index}
            >{category}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Categories;
