import React from 'react';


export const ContentWrapper = () => {

  return (
    <main className="main">
    
    
    
    
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
