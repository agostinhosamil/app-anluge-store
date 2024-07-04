'use client'
// import React from 'react'

import Link from 'next/link'
import { Fragment } from 'react'
import { FaCartPlus, FaEllipsisV, FaHeart } from 'react-icons/fa'

import { Image } from '@components/Image'
import { useStoreContext } from 'store@components/Context'
import { ProductProps } from '~/Types/Product'
import {
  emptyProductDescription,
  formatAmount,
  resolveProductImageUrl
} from '~/utils'
import { getProductRatesAverage } from '~/utils/models/product'
import { StarRating } from './StarRating'
import * as Styled from './styles'

export type ProductCardProps = {
  product: ProductProps
  showAside?: boolean
  showProductAdditionalData?: boolean
}

type ProductCardComponent = React.FunctionComponent<ProductCardProps>

export const ProductCard: ProductCardComponent = props => {
  const storeContext = useStoreContext()

  const { product } = props

  const addToCartButtonClickHandler = () => {
    storeContext.addOrder(product)
  }

  const shouldNotShowAside = !(
    typeof props.showAside === 'boolean' && !props.showAside
  )

  const shouldNotShowProductAdditionalData = Boolean(
    typeof props.showProductAdditionalData === 'boolean' &&
      props.showProductAdditionalData
  )

  return (
    <Styled.Container>
      <Link href={`/products/${product.slag}`}>
        <Styled.Content>
          <Styled.ImageWrapper>
            <Image
              src={resolveProductImageUrl(product, 'normal')}
              width={210}
              height={250}
              alt={product.name}
            />
          </Styled.ImageWrapper>
          <Styled.Name>{product.name}</Styled.Name>
          {!shouldNotShowProductAdditionalData && (
            <Fragment>
              {!emptyProductDescription(product.summary) && (
                <Styled.Description>{product.summary}</Styled.Description>
              )}
              <Styled.StatsData>
                {product.rates instanceof Array &&
                  product.rates.length >= 1 && (
                    <div>
                      <StarRating value={getProductRatesAverage(product)} />
                    </div>
                  )}
                {product.orders instanceof Array &&
                  product.orders.length >= 1 && (
                    <div>
                      <span>+{product.orders.length} unidades vendidas</span>
                    </div>
                  )}
              </Styled.StatsData>
              <Styled.MetaData>
                <Styled.Price>
                  {(product.price >= 1 && (
                    <Fragment>
                      <h3>{formatAmount(product.price)}</h3>
                    </Fragment>
                  )) || <h5>Preço sob consulta</h5>}
                </Styled.Price>
                <span>{product.category?.title}</span>
              </Styled.MetaData>
            </Fragment>
          )}
        </Styled.Content>
      </Link>
      {shouldNotShowAside && (
        <Styled.AsideContainer>
          <Styled.AsideBody>
            <ul>
              <li>
                <button
                  type="button"
                  role="button"
                  className="color-primary"
                  onClick={addToCartButtonClickHandler}
                >
                  <i>
                    <FaCartPlus />
                  </i>
                </button>
              </li>
              <li>
                <button type="button" role="button">
                  <i>
                    <FaHeart />
                  </i>
                </button>
              </li>
              <li>
                <button type="button" role="button">
                  <i>
                    <FaEllipsisV />
                  </i>
                </button>
              </li>
            </ul>
          </Styled.AsideBody>
        </Styled.AsideContainer>
      )}
    </Styled.Container>
  )
}
