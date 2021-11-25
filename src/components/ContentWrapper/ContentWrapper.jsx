import React from 'react';


export const ContentWrapper = () => {

  return (
    <main className="main">
    
    
    <section className="delivery-week container">
      <h2 className="delivery-title">Доставка готовой еды на неделю</h2>
      <div className="delivery-cards">
        <div className="delivery-card">
          <img src="img/card1.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-hel">ЗОЖ</span>
        </div>
        <div className="delivery-card">
          <img src="img/card2.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-veg">Овощное</span>
        </div>
        <div className="delivery-card">
          <img src="img/card3.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-meat">Мясное</span>
        </div>
        <div className="delivery-card">
          <img src="img/card4.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-bird">Птица</span>
        </div>
        <div className="delivery-card">
          <img src="img/card5.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-fish">Рыбное</span>
        </div>
        <div className="delivery-card">
          <img src="img/card6.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-child">Детское</span>
        </div>
        <div className="delivery-card">
          <img src="img/card7.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag tag-parents">Родителям</span>
        </div>
        <div className="delivery-card">
          <img src="img/card8.png" alt="Index.Eda: FoodCard" className="delivery-card__img"/>
          <span className="delivery-card__tag">Праздничное</span>
        </div>
      </div>
    </section>
    <section className="categories">
      <div className="categories-wrapper container">
        <h2 className="categories-title">Категории блюд</h2>
        <ul className="categories-tabs">
          <li className="categories-tab active">Популярные блюда</li>
          <li className="categories-tab">Овощное</li>
          <li className="categories-tab">Мясное</li>
        </ul>
        <div className="categories-cards">
          <div className="categories-card">
            <img className="categories-card__img" src="img/teriaki.png" alt="Index.Eda: Терияки"/>
            <div className="categories-card__content">
              <h3 className="categories-card__title">Куриные крылья под соусом Терияки</h3>
              <p className="categories-card__descr">Соус Терияки придумали повора из Японии. По традиции его используют в качестве маринада для...</p>
              <div className="categories-card__info">
                <div className="categories-card__text">
                  <span className="categories-card__text-price">260 ₽</span>
                  <span className="categories-card__text-weight">500 гр</span>
                </div>
                <button className="button button-outline button-small">В корзину</button>
              </div>
            </div>
          </div>
          <div className="categories-card">
            <img className="categories-card__img" src="img/teriaki.png" alt="Index.Eda: Терияки"/>
            <div className="categories-card__content">
              <h3 className="categories-card__title">Куриные крылья под соусом Терияки</h3>
              <p className="categories-card__descr">Соус Терияки придумали повора из Японии. По традиции его используют в качестве маринада для...</p>
              <div className="categories-card__info">
                <div className="categories-card__text">
                  <span className="categories-card__text-price">260 ₽</span>
                  <span className="categories-card__text-weight">500 гр</span>
                </div>
                <button className="button button-outline button-small">В корзину</button>
              </div>
            </div>
          </div>
          <div className="categories-card">
            <img className="categories-card__img" src="img/teriaki.png" alt="Index.Eda: Терияки"/>
            <div className="categories-card__content">
              <h3 className="categories-card__title">Куриные крылья под соусом Терияки</h3>
              <p className="categories-card__descr">Соус Терияки придумали повора из Японии. По традиции его используют в качестве маринада для...</p>
              <div className="categories-card__info">
                <div className="categories-card__text">
                  <span className="categories-card__text-price">260 ₽</span>
                  <span className="categories-card__text-weight">500 гр</span>
                </div>
                <button className="button button-outline button-small">В корзину</button>
              </div>
            </div>
          </div>
          <div className="categories-card">
            <img className="categories-card__img" src="img/teriaki.png" alt="Index.Eda: Терияки"/>
            <div className="categories-card__content">
              <h3 className="categories-card__title">Куриные крылья под соусом Терияки</h3>
              <p className="categories-card__descr">Соус Терияки придумали повора из Японии. По традиции его используют в качестве маринада для...</p>
              <div className="categories-card__info">
                <div className="categories-card__text">
                  <span className="categories-card__text-price">260 ₽</span>
                  <span className="categories-card__text-weight">500 гр</span>
                </div>
                <button className="button button-outline button-small">В корзину</button>
              </div>
            </div>
          </div>
        </div>
        <button className="button button-outline button-big">Больше блюд</button>
      </div>
    </section>
    <section className="benefits container">
      <h2 className="benefits-title">Наши преимущества</h2>
      <div className="benefits-cards">
        <div className="benefits-card">
          <img className="benefits-card__img" src="img/benefit1.png" alt="Index.Eda: Преимущества"/>
          <div className="benefits-card-text">
            <h3 className="benefits-card__title">Какой путь проходит ваша еда</h3>
            <p className="benefits-card__descr">Вы делаете заказ на коробку с недельным запасом полуфабрикатов и готовых блюд для всей семьи</p>
          </div>
        </div>
        <div className="benefits-card">
          <img className="benefits-card__img" src="img/benefit2.png" alt="Index.Eda: Преимущества"/>
          <div className="benefits-card-text">
            <h3 className="benefits-card__title">Как происходит производство</h3>
            <p className="benefits-card__descr">За день до доставки мы сами готовим блюда из натуральных продуктов без консервантов, красителей и гмо</p>
          </div>
        </div>
        <div className="benefits-card">
          <img className="benefits-card__img" src="img/benefit3.png" alt="Index.Eda: Преимущества"/>
          <div className="benefits-card-text">
            <h3 className="benefits-card__title">Высокие стандарты качества</h3>
            <p className="benefits-card__descr">Наши повара с многолетним опытом с любовью готовят каждую порцию блюда</p>
          </div>
        </div>
        <div className="benefits-card">
          <img className="benefits-card__img" src="img/benefit4.png" alt="Index.Eda: Преимущества"/>
          <div className="benefits-card-text">
            <h3 className="benefits-card__title">Быстрая и качественная доставка</h3>
            <p className="benefits-card__descr">Сами доставим всё прямов в вашу морозилку, сохранив температурный режим и качество наших блюд</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}
