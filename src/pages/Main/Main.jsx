import React from 'react'
import {PromoSlider} from '../../components/PromoSlider/PromoSlider'
import {PromoBlock} from '../../components/PromoBlock/PromoBlock'

export const Main = (props) => {

  return (
    <main className="main">
      <PromoSlider />
      <PromoBlock />
    </main>
  )
}
