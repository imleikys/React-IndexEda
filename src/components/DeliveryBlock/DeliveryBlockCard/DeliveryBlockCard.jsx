import {useContext} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import AppContext from "../../../context";
import {clearModal, setItemsForModal} from "../../../redux/actions/modal";
import {Link} from "react-router-dom";


export const DeliveryBlockCard = ({img, title, className}) => {
  const dispatch = useDispatch();
  const {setIsModalActive} = useContext(AppContext);
  const foodCards = useSelector(({response}) => response.foodCards);

  const onClickHandler = () => {
    dispatch(clearModal());

    if (foodCards.length !== 0) {
      dispatch(setItemsForModal(foodCards, className));
      setIsModalActive(true);
    }
  }

  return (
    <Link to="/delivery" onClick={() => onClickHandler()} className="delivery-card">
      <img src={img} alt="Index.Eda: FoodCard" className="delivery-card__img"/>
      <span className={`delivery-card__tag ${className}`}>{title}</span>
    </Link>
  )
}

export default DeliveryBlockCard;
