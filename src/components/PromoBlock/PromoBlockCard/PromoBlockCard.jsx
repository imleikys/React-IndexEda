export const PromoBlockCard = ({price, title, img, deliveryPrice, descr}) => {

  return (
    <section className="main-promo__card">
        <img className="card-img" src={img} alt="Index.Eda: SweetBasket" />
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <p className="card-descr">{descr}.</p>
        </div>
        <div className="card-footer">
          <strong className="card-price">ОТ {price}</strong>
          <span className="card-delivery">стоимость доставки до {deliveryPrice}</span>
          <a className="button button-default" href="/">Собрать корзину</a>
        </div>
    </section>
  )
}