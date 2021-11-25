import {Link} from "react-router-dom";


export const PromoSlider = () => {
  return (
    <div className="main-slider container">
      <div className="main-slider__slide text-light slide-summer">
        <div className="main-slider__content">
          <h2 className="main-slider__slide-title">Неделя летних овощей</h2>
          <p className="main-slider__slide-text">Специальная овощная корзина. Новые продукты, специальные цены, скидки!</p>
          <Link to="/" className="button button-primary">Заказать со скидкой</Link>
        </div>
      </div>
    </div>
  );
}