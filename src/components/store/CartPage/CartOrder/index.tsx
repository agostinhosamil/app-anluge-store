import Image from 'next/image'
import { useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'

import { StoreCartItem, useStoreContext } from 'store@components/Context'
import { CategoryBreadCrumb } from 'store@components/ProductPage/CategoryBreadCrumb'
import { resolveProductImageUrl } from '~/utils'
import {
  AmountInputWrapper,
  BudgetData,
  Container,
  DataWrapper,
  HeadingWrapper,
  ImageWrapper,
  Price,
  SelectedContainer
} from './styles'

type CartOrderProps = {
  product: StoreCartItem
}

type CartOrderComponent = React.FunctionComponent<CartOrderProps>

export const CartOrder: CartOrderComponent = ({ product }) => {
  const [selected, setSelected] = useState<boolean>(false)
  const [amount, setAmount] = useState(product.quantity || 1)

  const storeContext = useStoreContext()

  // useEffect(() => () => {
  //   if (amount < 2) {
  //     return
  //   }

  // })

  const updateAmount = (amount: number = 1) => {
    if (amount >= 1) {
      setAmount(amount)

      storeContext.updateOrder(product.id, {
        quantity: amount
      })
    }
  }

  const minusButtonClickHandler = () => {
    if (amount >= 2) {
      updateAmount(amount - 1)
    }
  }

  const plusButtonClickHandler = () => {
    updateAmount(amount + 1)
  }

  const removeOrderButtonClickHandler = () => {
    storeContext.removeOrder(product.id)
  }

  const amountInputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement
    const inputElementValue = parseInt(inputElement.value)

    if (!isNaN(inputElementValue) && inputElementValue >= 1) {
      updateAmount(inputElementValue)
    }
  }

  const ContainerElement = selected ? SelectedContainer : Container

  return (
    <ContainerElement>
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
                <button
                  type="button"
                  onClick={minusButtonClickHandler}
                  disabled={amount < 2}
                >
                  <FaMinus />
                </button>
              </i>
              <input
                type="text"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                onChange={amountInputChangeHandler}
                value={amount}
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
    </ContainerElement>
  )
}
