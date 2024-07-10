'use client'

import Carousel from 'react-bootstrap/Carousel'

import { range } from '~/utils'

import { AdvertisingPanel } from './AdvertisingPanel'

export const AdvertisingPanelsCarrousel = () => {
  return (
    <Carousel controls={false}>
      {range(1).map(i => (
        <Carousel.Item key={i}>
          <AdvertisingPanel
            image="image001.jpg"
            title="Uma poderosa solução para proteger os ativos da sua empresa"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
