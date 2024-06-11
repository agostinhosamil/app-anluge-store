// import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { FaCartPlus, FaEllipsisV, FaHeart } from 'react-icons/fa'

import { useStoreContext } from 'store@components/Context'
import { ProductProps } from '~/Types/Product'
import { resolveProductImageUrl } from '~/utils'
import { StarRating } from './StarRating'
import * as Styled from './styles'

type ProductCardProps = ProductProps

export const ProductCard: React.FunctionComponent<ProductCardProps> = props => {
  const storeContext = useStoreContext()

  const addToCartButtonClickHandler = () => {
    storeContext.addOrder(props)
  }

  return (
    <Styled.Container>
      <Link href={`/products/${props.slag}`}>
        <Styled.Content>
          <Styled.ImageWrapper>
            <Image
              src={resolveProductImageUrl(props)}
              width={210}
              height={250}
              alt={props.name}
            />
          </Styled.ImageWrapper>
          <Styled.Name>{props.name}</Styled.Name>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.StatsData>
            <div>
              <StarRating value={3} />
            </div>
            <div>
              <span>+133 uniaddes vendidas</span>
            </div>
          </Styled.StatsData>
          <Styled.MetaData>
            <Styled.Price>
              {(props.price >= 1 && (
                <Fragment>
                  <i>AKZ</i>
                  <h3>{props.price}</h3>
                </Fragment>
              )) || <h5>Preço sob consulta</h5>}
            </Styled.Price>
            <span>{props.category?.title}</span>
          </Styled.MetaData>
        </Styled.Content>
      </Link>
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
    </Styled.Container>
  )
}
