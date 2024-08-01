'use client'

import Image from 'next/image'
import Link from 'next/link'
import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  FaCartArrowDown,
  FaCartPlus,
  FaEllipsisVertical,
  FaHeart,
  FaMinus,
  FaPlus
} from 'react-icons/fa6'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'

import { useApp } from '@components/ApplicationContext'
import { RichText } from '@components/RichText'
import { useState } from 'react'
import { useStoreContext } from 'store@components/Context'
import { AdvertiseGroup } from 'store@components/NewsFeed/AdvertiseGroup'
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
import { ToastAction } from 'ui@components/toast'
import { useToast } from 'ui@components/use-toast'
import { emptyProductDescription, formatAmount } from '~/utils'
import { getProductRatesAverage } from '~/utils/models/product'

type ContentComponent = React.FunctionComponent<React.PropsWithChildren>

export const Content: ContentComponent = props => {
  const app = useApp()
  const { toast } = useToast()
  const { product } = useProductPageContext()
  const storeContext = useStoreContext()

  const productOrderData = storeContext.getOrder(product.id)

  const productOrderQuantity = Number(productOrderData?.quantity)

  const [quantity, setQuantity] = useState<number>(
    !isNaN(productOrderQuantity) && productOrderQuantity >= 1
      ? productOrderQuantity
      : 1
  )

  const addToCartButtonClickHandler = () => {
    storeContext.addOrder({
      ...product,
      quantity
    })

    toast({
      title: 'Produto adicionado ao carrinho',
      description: `'${product.name}' está pronto para ser encomendado.`,
      // duration: 500,
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

  const removeFromCartButtonClickHandler = () => {
    storeContext.removeOrder(product.id)

    toast({
      title: 'Produto removido do carrinho',
      description: `'${product.name}' está fora da lista de encomendas.`,
      // duration: 500,
      action: (
        <ToastAction
          altText="Re-Adicionar"
          onClick={() => {
            storeContext.addOrder({
              ...product,
              quantity
            })

            alert('A')
          }}
        >
          Re-Adicionar
        </ToastAction>
      )
    })
  }

  const plusButtonClickHandler = () => {
    if (!storeContext.productOrdered(product.id)) {
      return setQuantity(quantity + 1)
    }

    storeContext.updateOrder(product.id, {
      quantity: quantity + 1
    })
  }

  const minusButtonClickHandler = () => {
    if (quantity < 2) {
      return
    }

    if (!storeContext.productOrdered(product.id)) {
      return setQuantity(quantity - 1)
    }

    storeContext.updateOrder(product.id, {
      quantity: quantity - 1
    })
  }

  const quantityInputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement
    const inputElementValue = Number(
      inputElement.value.replaceAll(/[^0-9]/g, '')
    )

    setQuantity(
      !isNaN(inputElementValue) && inputElementValue >= 1
        ? inputElementValue
        : 1
    )
  }

  const quantityInputKeyDownHandler: React.KeyboardEventHandler = event => {
    const pressedKey = event.key

    if (/^[^0-9]$/.test(pressedKey)) {
      event.preventDefault()
    }
  }

  const productOrdered = storeContext.productOrdered(product.id)

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
              {product.rates instanceof Array && product.rates.length >= 1 && (
                <StarRatingElementContainer>
                  <StarRating value={getProductRatesAverage(product)} />
                </StarRatingElementContainer>
              )}
              {product.orders instanceof Array &&
                product.orders.length >= 1 && (
                  <span>+{product.orders.length} unidades vendidas</span>
                )}
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
            <div className="w-full flex gap-3 flex-row items-center py-3">
              <button
                type="button"
                role="button"
                onClick={minusButtonClickHandler}
                disabled={quantity < 2}
                className="outline-none flex items-center justify-center border-0 bg-zinc-200 text-zinc-900 enabled:hover:bg-zinc-300 enabled:active:bg-zinc-400 cursor-pointer rounded-full size-[35px]"
              >
                <FaMinus />
              </button>
              <input
                type="text"
                className="w-[60px] px-3 py-2 border-1 border-zinc-300 rounded-md outline-none text-center uppercase font-extrabold text-zinc-900"
                value={quantity}
                onChange={quantityInputChangeHandler}
                onKeyDown={quantityInputKeyDownHandler}
              />

              <button
                type="button"
                role="button"
                onClick={plusButtonClickHandler}
                className="outline-none flex items-center justify-center border-0 bg-zinc-200 text-zinc-900 hover:bg-zinc-300 active:bg-zinc-400 cursor-pointer rounded-full size-[35px]"
              >
                <FaPlus />
              </button>
            </div>
            <ProductActionsListWrapper>
              <ul>
                {!productOrdered && (
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
                )}
                {productOrdered && (
                  <li>
                    <ActionButton
                      type="button"
                      role="button"
                      $color="red"
                      onClick={removeFromCartButtonClickHandler}
                    >
                      <i>
                        <FaCartArrowDown />
                      </i>
                      <span>Remover do carrinho</span>
                    </ActionButton>
                  </li>
                )}
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
          <AdvertiseGroup group="top" flexDirection="column" />
          <ProductRates product={product} />
          <ProductFAQs product={product} />
        </Column>
      </Row>
    </Container>
  )
}
