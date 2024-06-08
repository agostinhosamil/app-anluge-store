import Image from 'next/image'

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
  return (
    <Container>
      {product.medias.length >= 2 && (
        <ThumbnailsListWrapper>
          <ul>
            {product.medias.map(media => (
              <li key={media.id}>
                <div>
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
        <ImageWrapper>
          <Image
            src={resolveProductImageUrl(product)}
            alt="Product name should be here"
            width={900}
            height={1200}
          />
        </ImageWrapper>
      </Content>
    </Container>
  )
}
