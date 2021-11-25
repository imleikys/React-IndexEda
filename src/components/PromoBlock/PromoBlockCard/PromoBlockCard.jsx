

export const PromoBlockCard = ({img}) => {
  return (
    <section className="main-promo__card">
        <img className="card-img" src={img} alt="Index.Eda: SweetBasket" />
        <div className="card-header">
          <h3 className="card-title">Сладкая корзина</h3>
          <p className="card-descr">Произвольный выбор
            десертов по Вашему
            желанию.</p>
        </div>
        <div className="card-footer">
          <strong className="card-price">ОТ 1 300 ₽</strong>
          <span className="card-delivery">стоимость доставки до 200 ₽</span>
          <a className="button button-default" href="/">Собрать корзину</a>
        </div>
    </section>
  )
}