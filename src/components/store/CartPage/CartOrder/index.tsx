import Image from 'next/image'
import { useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'

import { ProductProps } from 'Types/Product'
import { useStoreContext } from 'store@components/Context'
import { CategoryBreadCrumb } from 'store@components/ProductPage/CategoryBreadCrumb'
import { resolveProductImageUrl } from '~/utils'
import {
  AmountInputWrapper,
  BudgetData,
  Container,
  DataWrapper,
  HeadingWrapper,
  ImageWrapper,
  Price
} from './styles'

type CartOrderProps = {
  product: ProductProps
}

type CartOrderComponent = React.FunctionComponent<CartOrderProps>

export const CartOrder: CartOrderComponent = ({ product }) => {
  const [amount, setAmount] = useState(1)

  const storeContext = useStoreContext()

  const minusButtonClickHandler = () => {
    if (amount >= 2) {
      setAmount(amount - 1)
    }
  }

  const plusButtonClickHandler = () => {
    setAmount(amount + 1)
  }

  const removeOrderButtonClickHandler = () => {
    storeContext.removeOrder(product.id)
  }

  return (
    <Container>
      <ImageWrapper>
        <i>
          <Image
            src={resolveProductImageUrl(product)}
            alt={product.name}
            width={100}
            height={120}
          />
        </i>
      </ImageWrapper>
      <DataWrapper>
        <HeadingWrapper>
          <h6>{product.name}</h6>
          <ul>
            <li>
              <button>
                <i>
                  <FaHeart />
                </i>
              </button>
            </li>
            <li>
              <button type="button" onClick={removeOrderButtonClickHandler}>
                <i>
                  <FaTrash />
                </i>
              </button>
            </li>
          </ul>
        </HeadingWrapper>
        <CategoryBreadCrumb />
        <BudgetData>
          {product.price >= 1 && (
            <Price>
              <strong>AKZ {product.price}</strong>
            </Price>
          )}
          <AmountInputWrapper>
            <div>
              <i>
                <button type="button" onClick={minusButtonClickHandler}>
                  <FaMinus />
                </button>
              </i>
              <input
                type="text"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                defaultValue={amount}
              />
              <i>
                <button type="button" onClick={plusButtonClickHandler}>
                  <FaPlus />
                </button>
              </i>
            </div>
          </AmountInputWrapper>
        </BudgetData>
      </DataWrapper>
    </Container>
  )
}
