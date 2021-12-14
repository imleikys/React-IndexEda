import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setFilter} from "../../../redux/actions/filters";


export const DeliveryBlockCard = ({img, title, className}) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setFilter(className));
  }

  return (
    <Link to="/delivery" onClick={() => onClickHandler()} className="delivery-card">
      <img src={img} alt="Index.Eda: FoodCard" className="delivery-card__img"/>
      <span className={`delivery-card__tag ${className}`}>{title}</span>
    </Link>
  )
}

export default DeliveryBlockCard;
