export const DeliveryBlockCard = ({img, title, className}) => {
  return (
    <div className="delivery-card">
      <img src={img} alt="Index.Eda: FoodCard" className="delivery-card__img"/>
      <span className={`delivery-card__tag ${className}`}>{title}</span>
    </div>
  )
}
