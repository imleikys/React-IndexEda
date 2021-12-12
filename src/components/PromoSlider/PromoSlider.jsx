import {useContext} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import AppContext from "../../context";
import {clearModal, setItemsForModal} from "../../redux/actions/modal";


export const PromoSlider = () => {
  const {setIsModalActive, foodCards} = useContext(AppContext);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  
  const onClickHandler = () => {
    dispatch(clearModal());

    let itemsForModal;
    if (foodCards.length !== 0) {
      itemsForModal = foodCards.filter((card) => card.id % 2 === 0);
      dispatch(setItemsForModal(itemsForModal));
      setIsModalActive(true);
    }
  }

  return (
    <div className="main-slider container">
      <div className="main-slider__slide text-light slide-summer">
        <div className="main-slider__content">
          <h2 className="main-slider__slide-title">Неделя летних овощей</h2>
          <p className="main-slider__slide-text">Специальная овощная корзина. Новые продукты, специальные цены, скидки!</p>
          <button onClick={() => onClickHandler()} className="button button-primary">Заказать со скидкой</button>
        </div>
      </div>
    </div>
  );
}

export default PromoSlider;
