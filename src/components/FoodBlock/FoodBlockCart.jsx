import React, {useState} from "react";
import {FoodCardCart} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import emptyCart from '../../assets/img/emptyCart.png';
import {clearCart} from "../../redux/actions/cart";


export const FoodBlockCart = () => {
  const items = useSelector(({ cart }) => cart.items);
  const cartItems = Object.keys(items).map((key) => items[key].items);
  const dispatch = useDispatch();

  const [isEmpty, setIsEmpty] = useState(cartItems.length === 0);
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };

  const onClearHandler = () => {
    setIsEmpty(true);
    dispatch(clearCart());
  }

  return (
    <>
      {isEmpty ? (
        <div className="empty-cart container">
          <h2 className="empty-cart-title">Корзина пустая</h2>
          <img src={emptyCart} alt="IndexEda.Cart" />
          <p className="empty-cart-descr">
            Добавьте хотя бы один продукт, чтобы сделать заказ.
          </p>
          <button
            onClick={handleRoute}
            className="button button-primary button-big"
          >
            Вернутся назад
          </button>
        </div>
      ) : (
        <section className="foodblock">
          <div className="foodblock-wrapper container">
            <h1 className="foodblock-title">Корзина</h1>
            <div className="foodblock-cards">
              {cartItems &&
                cartItems.map((foodCard, index) => {
                  return (
                    <FoodCardCart
                      img={foodCard.img}
                      title={foodCard.title}
                      descr={foodCard.descr}
                      price={foodCard.price}
                      weight={foodCard.weight}
                      id={foodCard.id}
                      key={foodCard.id}
                    />
                  );
                })}
            </div>
            {cartItems.length !== 0 ? (
              <button onClick={() => onClearHandler()} className="button button-outline button-big">
                Оформить заказ
              </button>
            ) : (
              setIsEmpty(true)
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default FoodBlockCart;
