export const BenefitsCard = ({img, title, descr}) => {
  return (
    <div className="benefits-card">
      <img
        className="benefits-card__img"
        src={img}
        alt="Index.Eda: Преимущества"
      />
      <div className="benefits-card-text">
        <h3 className="benefits-card__title">{title}</h3>
        <p className="benefits-card__descr">
          {descr}
        </p>
      </div>
    </div>
  );
}

export default BenefitsCard;
