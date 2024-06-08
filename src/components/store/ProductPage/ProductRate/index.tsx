import Image from 'next/image'

import { Prisma } from '@prisma/client'
import { StarRating } from 'store@components/NewsFeed/ProductCard/StarRating'
import { uploadedImageUrl } from '~/utils'
import { RateMedias } from './RateMedias'
import { Body, Container, HeadWrapper } from './styles'

type ProductRate = Prisma.RateGetPayload<{
  include: {
    medias: true
    user: true
  }
}>

type ProductRateProps = {
  rate: ProductRate
}

export const ProductRate = ({ rate }: ProductRateProps) => {
  return (
    <Container>
      <HeadWrapper>
        <i>
          <Image
            src={uploadedImageUrl(
              rate.user.image || 'user-avatar-placeholder.jpg'
            )}
            alt="Rate title"
            width={45}
            height={45}
          />
        </i>
        <data>
          <strong>{rate.user.name}</strong>
          <div className="rate-stats-data">
            <div className="rate-star-rating-element-wrapper">
              <StarRating value={4} size="small" />
            </div>
            <span>Há dois meses</span>
          </div>
        </data>
      </HeadWrapper>
      <Body>
        <p>{rate.message}</p>
        <RateMedias />
      </Body>
    </Container>
  )
}
