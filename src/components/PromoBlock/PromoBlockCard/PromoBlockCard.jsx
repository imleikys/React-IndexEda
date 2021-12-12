import {useContext} from "react";
import {useDispatch} from "react-redux";
import AppContext from "../../../context";
import {clearModal, setItemsForModal} from "../../../redux/actions/modal";


export const PromoBlockCard = ({price, title, img, deliveryPrice, descr}) => {
  const dispatch = useDispatch()
  const {foodCards, setIsModalActive} = useContext(AppContext);

  const onClickHandler = () => {
    dispatch(clearModal());
    
    let itemsForModal;
    if (foodCards.length !== 0) {
      itemsForModal = foodCards.filter((card) => card.id % 3 === 0);
      dispatch(setItemsForModal(itemsForModal));
      setIsModalActive(true);
    }
  }

  return (
    <div className="main-promo__card">
        <img className="card-img" src={img} alt="Index.Eda: SweetBasket" />
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <p className="card-descr">{descr}.</p>
        </div>
        <div className="card-footer">
          <strong className="card-price">ОТ {price}</strong>
          <span className="card-delivery">стоимость доставки до {deliveryPrice}</span>
          <button onClick={onClickHandler} className="button button-default" href="/">Собрать корзину</button>
        </div>
    </div>
  )
}

export default PromoBlockCard;
