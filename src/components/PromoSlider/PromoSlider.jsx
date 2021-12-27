import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppContext from "../../context";
import {clearModal, setItemsForModal} from "../../redux/actions/modal";
import ContentLoader from "react-content-loader";

export const PromoSlider = (props) => {
  const {setIsModalActive} = useContext(AppContext);
  const foodCards = useSelector(({response}) => response.foodCards);
  const isLoading = useSelector(({loading}) => loading.isLoading);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(clearModal());

    if (foodCards.length !== 0) {
      dispatch(setItemsForModal(foodCards, "tag-veg"));
      setIsModalActive(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="main-slider container">
          <ContentLoader
            speed={2}
            viewBox="0 0 1250 455"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="20" ry="20" width={"100%"} height={"100%"} />
          </ContentLoader>
        </div>
      ) : (
        <div className="main-slider container">
          <div className="main-slider__slide text-light slide-summer">
            <div className="main-slider__content">
              <h2 className="main-slider__slide-title">Неделя летних овощей</h2>
              <p className="main-slider__slide-text">
                Специальная овощная корзина. Новые продукты, специальные цены,
                скидки!
              </p>
              <button
                onClick={() => onClickHandler()}
                className="button button-primary"
              >
                Заказать со скидкой
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoSlider;
