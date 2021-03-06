import React from "react";
import {useDispatch} from "react-redux";
import {removeItemFromCart} from "../../../../redux/actions/cart";


export const FoodCardCart = ({img, title, descr, price, weight, id}) => {
  const dispatch = useDispatch();

  const onRemoveHandler = () => {
    dispatch(removeItemFromCart(id));
  }

  return (
    <div className="food-card">
      <img
        className="food-card__img"
        src={img}
        alt="Index.Eda: Терияки"
      />
      <div className="food-card__content">
        <h3 className="food-card__title">
          {title}
        </h3>
        <p className="food-card__descr">
          {descr}
        </p>
        <div className="food-card__info">
          <div className="food-card__text">
            <span className="food-card__text-price">{price} ₽</span>
            <span className="food-card__text-weight">{weight} гр</span>
          </div>
          <button onClick={onRemoveHandler} className="button button-outline button-small">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCardCart;
