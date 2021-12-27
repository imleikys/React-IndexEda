import React from 'react';
import {PromoBlockCard} from '..';
import {useSelector} from 'react-redux';
import ContentLoader from 'react-content-loader';


export const PromoBlock = () => {
  const isLoading = useSelector(({loading}) => loading.isLoading);
  const promoData = useSelector(({response}) => response.promo);

  return (
    <div className="main-promo container">
      {
        isLoading ? (
          [...Array(2)].map((_, index) => (
            <div key={index}className="main-promo__card main-promo__card-loading">
              <ContentLoader 
                speed={2}
                viewBox="0 0 570 380"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="20" ry="20" width={"100%"} height={"100%"} />
            </ContentLoader> 
            </div>
          ))
        ) : (
          promoData && promoData.map((block, index) => (
            <PromoBlockCard 
              title={block.title}
              price={block.price}
              img={block.img}
              deliveryPrice={block.deliveryPrice}
              descr={block.descr}
              type={block.type}
              loading={isLoading}
              key={index}
            />
          ))
        )
      }
    </div>
  )
}

export default PromoBlock;
