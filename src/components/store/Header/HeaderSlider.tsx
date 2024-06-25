import Image from 'next/image'
import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { SliderImageWrapper } from './styles'

export const HeaderSlider = () => {
  const [imageHeight, setImageHeight] = useState<number>(340)

  const sliderImages = ['/image001.png', '/image002.png', '/image003.png']

  useEffect(() => {
    const windowScrollHandler = () => {
      if (window.innerWidth <= 565 && imageHeight > 220) {
        setImageHeight(220)
      }

      if (window.innerWidth > 565 && imageHeight <= 220) {
        setImageHeight(340)
      }
    }

    window.addEventListener('resize', windowScrollHandler)

    windowScrollHandler()

    return () => {
      window.removeEventListener('resize', windowScrollHandler)
    }
  }, [imageHeight])

  return (
    <div>
      <Carousel controls={false} fade indicators={false}>
        {sliderImages.map((image, index) => (
          <Carousel.Item key={index}>
            <SliderImageWrapper>
              <Image src={image} alt={image} width={600} height={imageHeight} />
            </SliderImageWrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
