'use client'

import Image from '@components/Image'

import { useState } from 'react'
import { ProductProps } from '~/Types/Product'
import { resolveProductImageUrl, uploadedImageUrl } from '~/utils'
import {
  Container,
  Content,
  ImageWrapper,
  ThumbnailsListWrapper
} from './styles'

type ProductImageGalleryProps = {
  product: ProductProps
}

type ProductImageGalleryComponent =
  React.FunctionComponent<ProductImageGalleryProps>

export const ProductImageGallery: ProductImageGalleryComponent = ({
  product
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [mainImageSrc, setMainImageSrc] = useState<string>(
    resolveProductImageUrl(product, 'large')
  )

  const mainImageLoadHandler = () => {
    setLoading(false)
  }

  return (
    <Container>
      {product.medias.length >= 2 && (
        <ThumbnailsListWrapper>
          <ul>
            <li>
              <div
                onClick={() =>
                  setMainImageSrc(resolveProductImageUrl(product, 'large'))
                }
              >
                <Image
                  src={resolveProductImageUrl(product, 'small')}
                  alt={product.name}
                  width={50}
                  height={50}
                />
              </div>
            </li>
            {product.medias.map(media => (
              <li key={media.id}>
                <div
                  onClick={() =>
                    setMainImageSrc(uploadedImageUrl(media.fileName))
                  }
                >
                  <Image
                    src={uploadedImageUrl(media.fileName)}
                    alt={product.name}
                    width={50}
                    height={50}
                  />
                </div>
              </li>
            ))}
          </ul>
        </ThumbnailsListWrapper>
      )}
      <Content>
        <ImageWrapper className={loading ? 'loading' : undefined}>
          <Image
            src={mainImageSrc}
            alt="Product name should be here"
            width={900}
            height={1200}
            onLoad={mainImageLoadHandler}
          />
        </ImageWrapper>
      </Content>
    </Container>
  )
}
