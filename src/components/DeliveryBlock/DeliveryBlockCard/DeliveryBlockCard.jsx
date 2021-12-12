import {useContext} from "react";
import {useDispatch} from "react-redux";
import AppContext from "../../../context";
import {clearModal, setItemsForModal} from "../../../redux/actions/modal";


export const DeliveryBlockCard = ({img, title, className}) => {
  const dispatch = useDispatch();
  const {foodCards, setIsModalActive} = useContext(AppContext);

  const onClickHandler = () => {
    dispatch(clearModal());

    let itemsForModal;
    if (foodCards.length !== 0) {
      itemsForModal = foodCards.filter((card) => card.id % 4 === 0);
      dispatch(setItemsForModal(itemsForModal));
      setIsModalActive(true);
    }
  }

  return (
    <div onClick={onClickHandler} className="delivery-card">
      <img src={img} alt="Index.Eda: FoodCard" className="delivery-card__img"/>
      <span className={`delivery-card__tag ${className}`}>{title}</span>
    </div>
  )
}

export default DeliveryBlockCard;
