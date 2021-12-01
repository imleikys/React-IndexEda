export const FoodCard = ({img, title, descr, price, weight}) => {
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
          <button className="button button-outline button-small">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
