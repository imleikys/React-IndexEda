import React, { useContext } from 'react'
import {useSelector} from 'react-redux';
import AppContext from '../../context'
import {ModalCard} from '..';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';


export const Modal = () => {
  const {isModalActive, setIsModalActive} = useContext(AppContext);
  const items = useSelector(({ModalReducer}) => ModalReducer.modalItems);
  const totalPrice = useSelector(({ModalReducer}) => ModalReducer.totalPrice);
  const dispatch = useDispatch();

  const onOrderHandler = () => {
    items.map((item) => dispatch(addItemToCart(item)));
    setIsModalActive(false);
  }
  
  return (
    <div className={isModalActive ? 'modal active' : 'modal'} onClick={() => setIsModalActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal-title">Из чего состоит корзина</div>
        <div className="modal-cards">
          {
            isModalActive ? items.map((item) => (
              <ModalCard title={item.title} price={item.price} key={item.id}/>
            )) : null
          }
        </div>
        <div className="modal-footer">
          <div className="modal-footer__price">Цена с учётом скидки: {totalPrice} ₽</div>
          <button onClick={onOrderHandler} className="button button-outline button-small">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
