import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../../redux/actions/cart";

export const FoodCard = ({img, title, descr, price, weight, id, onAdd}) => {
  const [label, setLabel] = useState('Купить');
  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch(addItemToCart({img, title, descr, price, weight, id}));
    setLabel("В корзине")
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
          <button onClick={onAddHandler} className="button button-outline button-small">
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
