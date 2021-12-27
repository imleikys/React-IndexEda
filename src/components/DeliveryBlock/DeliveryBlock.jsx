import React from 'react';
import { useSelector } from 'react-redux';
import {DeliveryBlockCard} from '..';
import ContentLoader from 'react-content-loader';


export const DeliveryBlock = () => {
  const deliveryData = useSelector(({response}) => response.delivery);
  const isLoading = useSelector(({loading}) => loading.isLoading);

  return (
    <section className="delivery-week container">
      <h2 className="delivery-title">Доставка готовой еды на неделю</h2>
      <div className="delivery-cards">
      {
        isLoading ? (
          [...Array(8)].map((_, index) => (
            <div className="delivery-card delivery-card__loading" key={index}>
              <ContentLoader 
                speed={2}
                viewBox="0 0 275 182"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="18" ry="18" width={'100%'} height={'100%'} />
              </ContentLoader>
            </div>
          ))
        ) : (
          <>
            {
              deliveryData && deliveryData.map((card, index) => {
                return <DeliveryBlockCard 
                  title={card.title}
                  img={card.img}
                  className={card.className}
                  key={index} 
                />
              })
            }
          </>
        )
      }
      </div>
    </section>
  );
}

export default DeliveryBlock;



