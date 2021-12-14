import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {setFilter} from "../../../redux/actions/filters";


export const PromoBlockCard = ({price, title, img, deliveryPrice, descr, type}) => {
  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(setFilter(type));
  }

  return (
    <div onClick={() => onClickHandler()} className="main-promo__card">
        <img className="card-img" src={img} alt="Index.Eda: SweetBasket" />
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <p className="card-descr">{descr}.</p>
        </div>
        <div className="card-footer">
          <strong className="card-price">ОТ {price}</strong>
          <span className="card-delivery">стоимость доставки до {deliveryPrice}</span>
          <Link to="/delivery" className="button button-default">
            Собрать корзину
          </Link>
        </div>
    </div>
  )
}

export default PromoBlockCard;
