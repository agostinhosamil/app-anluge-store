'use client'

import Image from 'next/image'
import Link from 'next/link'
import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaCartPlus, FaEllipsisVertical, FaHeart } from 'react-icons/fa6'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'

import { useApp } from '@components/ApplicationContext'
import { RichText } from '@components/RichText'
import { useStoreContext } from 'store@components/Context'
import { StarRating } from 'store@components/NewsFeed/ProductCard/StarRating'
import { useProductPageContext } from 'store@components/pages/products/page/context'
import { CategoryBreadCrumb } from 'store@components/ProductPage/CategoryBreadCrumb'
import { ProductFAQs } from 'store@components/ProductPage/ProductFAQs'
import { ProductImageGallery } from 'store@components/ProductPage/ProductImageGallery'
import { ProductRates } from 'store@components/ProductPage/ProductRates'
import {
  ActionButton,
  CategoryBreadCrumbWrapper,
  Container,
  ContentWrapper,
  Price,
  PriceList,
  PriceListWrapper,
  ProductActionsListWrapper,
  ProductDataWrapper,
  ProductImageGalleryWrapper,
  ProductTagListWrapper,
  ShareOptionsContainer,
  StarRatingElementContainer,
  StatsData,
  Content as StyledContent,
  Summary
} from 'store@styles/product-page'
import { emptyProductDescription, formatAmount } from '~/utils'

type ContentComponent = React.FunctionComponent<React.PropsWithChildren>

export const Content: ContentComponent = props => {
  const { product } = useProductPageContext()

  const storeContext = useStoreContext()
  const app = useApp()

  const addToCartButtonClickHandler = () => {
    storeContext.addOrder(product)
  }

  return (
    <Container>
      <Row>
        <Column md={5}>
          <ProductImageGalleryWrapper>
            <ProductImageGallery product={product} />
          </ProductImageGalleryWrapper>
        </Column>
        <Column md={7}>
          <ProductDataWrapper>
            <h1>{product.name}</h1>
            <StatsData>
              <StarRatingElementContainer>
                <StarRating value={4} />
              </StarRatingElementContainer>
              <span>+198k unidades vendidas</span>
            </StatsData>
            <PriceListWrapper>
              {(product.price >= 1 && (
                <PriceList>
                  {/* <OldPrice>
                    <i>AKZ</i>
                    <h5>12.982.344,98</h5>
                  </OldPrice> */}
                  <Price>
                    <h5>{formatAmount(product.price)}</h5>
                  </Price>
                </PriceList>
              )) || <h5>Preço sob consulta</h5>}
            </PriceListWrapper>
            <CategoryBreadCrumbWrapper>
              <CategoryBreadCrumb product={product} />
            </CategoryBreadCrumbWrapper>
            <ProductActionsListWrapper>
              <ul>
                <li>
                  <ActionButton
                    type="button"
                    role="button"
                    $color="primary"
                    onClick={addToCartButtonClickHandler}
                  >
                    <i>
                      <FaCartPlus />
                    </i>
                    <span>Adicionar ao carrinho</span>
                  </ActionButton>
                </li>
                <li>
                  <ActionButton type="button" role="button">
                    <i>
                      <FaHeart />
                    </i>
                  </ActionButton>
                </li>
                <li>
                  <ActionButton type="button" role="button">
                    <i>
                      <FaEllipsisVertical />
                    </i>
                  </ActionButton>
                </li>
              </ul>
            </ProductActionsListWrapper>
            {product.tags.length >= 1 && (
              <ProductTagListWrapper>
                <ul>
                  {product.tags.map(tag => (
                    <li key={tag.id}>
                      <Link href={`/products/search/tags/${tag.slag}`}>
                        {tag.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ProductTagListWrapper>
            )}
            <ShareOptionsContainer>
              <strong>Partilhar este produto</strong>
              <ul>
                <li>
                  <FacebookShareButton
                    url={`${app.origin}/products/${product.slag}`}
                    title="Partilhar no Facebook"
                  >
                    <Image
                      src="/assets/images/social-media-icon-facebook.png"
                      alt="Partilhar no Facebook"
                      width={30}
                      height={30}
                    />
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton
                    url={`${app.origin}/products/${product.slag}`}
                    title="Partilhar no Twitter"
                  >
                    <Image
                      src="/assets/images/social-media-icon-twitter.png"
                      alt="Partilhar no Twitter"
                      width={30}
                      height={30}
                    />
                  </TwitterShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                    url={`${app.origin}/products/${product.slag}`}
                  >
                    <Image
                      src="/assets/images/social-media-icon-linkedin.png"
                      alt="Partilhar pelo Whatsapp"
                      width={30}
                      height={30}
                    />
                  </LinkedinShareButton>
                </li>
                <li>
                  <WhatsappShareButton
                    url={`${app.origin}/products/${product.slag}`}
                  >
                    <Image
                      src="/assets/images/social-media-icon-whatsapp.png"
                      alt="Partilhar pelo Whatsapp"
                      width={30}
                      height={30}
                    />
                  </WhatsappShareButton>
                </li>
              </ul>
            </ShareOptionsContainer>
          </ProductDataWrapper>
        </Column>
      </Row>
      <Row className="mb-4">
        <Column md={8}>
          <ContentWrapper>
            {props.children}
            {!emptyProductDescription(product.summary) && (
              <Summary>
                <RichText>{product.summary}</RichText>
              </Summary>
            )}
            {!emptyProductDescription(product.description) && (
              <StyledContent>
                <RichText>{product.description}</RichText>
              </StyledContent>
            )}
          </ContentWrapper>
        </Column>
        <Column md={4}>
          <ProductRates product={product} />
          <ProductFAQs product={product} />
        </Column>
      </Row>
    </Container>
  )
}
