'use client'
// import React from 'react'

import Link from 'next/link'
import { Fragment } from 'react'
import { FaCartPlus } from 'react-icons/fa'

import { Image } from '@components/Image'
import { useStoreContext } from 'store@components/Context'
import { ToastAction } from 'ui@components/toast'
import { useToast } from 'ui@components/use-toast'
import { ProductProps } from '~/Types/Product'
import {
  emptyProductDescription,
  formatAmount,
  resolveProductImageUrl
} from '~/utils'
import { getProductRatesAverage } from '~/utils/models/product'
import { FavoriteButton, OptionsButton } from './Buttons'
import { StarRating } from './StarRating'
import * as Styled from './styles'

export type ProductCardProps = {
  product: ProductProps
  width?: number | `${number}px` | `${number}%` | `${number}rem`
  showAside?: boolean
  showProductAdditionalData?: boolean
}

type ProductCardComponent = React.FunctionComponent<ProductCardProps>

export const ProductCard: ProductCardComponent = props => {
  const storeContext = useStoreContext()

  const { toast } = useToast()

  const { product } = props

  const addToCartButtonClickHandler = () => {
    storeContext.addOrder(product)

    toast({
      title: 'Produto adicionado ao carrinho',
      description: `'${product.name}' está pronto para ser encomendado.`,
      duration: 5000,
      action: (
        <ToastAction
          altText="Remover"
          onClick={() => storeContext.removeOrder(product.id)}
        >
          Remover
        </ToastAction>
      )
    })
  }

  const shouldNotShowAside = !(
    typeof props.showAside === 'boolean' && !props.showAside
  )

  const shouldNotShowProductAdditionalData = Boolean(
    typeof props.showProductAdditionalData === 'boolean' &&
      props.showProductAdditionalData
  )

  return (
    <Styled.Container $width={props.width}>
      <Link href={`/products/${product.slag}`}>
        <Styled.Content>
          <Styled.ImageWrapper>
            <Image
              src={resolveProductImageUrl(product, 'normal')}
              width={210}
              height={305}
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
                {product.price >= 1 && (
                  <Styled.Price>
                    <h3>{formatAmount(product.price)}</h3>
                  </Styled.Price>
                )}
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
                <FavoriteButton product={product} />
              </li>
              <li>
                <OptionsButton />
              </li>
            </ul>
          </Styled.AsideBody>
        </Styled.AsideContainer>
      )}
    </Styled.Container>
  )
}
