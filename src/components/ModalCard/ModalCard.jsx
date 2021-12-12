export const ModalCard = ({title, price}) => {
  return (
    <div className="modal-card">
      <div className="modal-card__img">
        <img src="https://sun9-87.userapi.com/impg/5lLLSGjd3PAr5hwCCK87sTiI7dXD8SVhyglIQw/zqIHG1Dg89I.jpg?size=270x192&quality=96&sign=a5ba7437f061206f593003664af3a4c4&type=album" alt="Index.Eda: food" />
      </div>
      <div className="modal-card__text">
        <h3 className="modal-card__text-title">{title}</h3>
        <span className="modal-card__text-price">{price} ₽</span>
      </div>
    </div>
  )
}

export default ModalCard;
