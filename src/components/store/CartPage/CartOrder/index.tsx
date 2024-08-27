import Image from 'next/image'
import { useState } from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'

import { StoreCartItem, useStoreContext } from 'store@components/Context'
import { FavoriteButton } from 'store@components/FavoriteButton'
import { CategoryBreadCrumb } from 'store@components/ProductPage/CategoryBreadCrumb'
import { formatAmount, resolveProductImageUrl } from '~/utils'

import { Favorite } from './buttons/Favorite'
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
  const [selected] = useState<boolean>(false)
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
            width={80}
            height={80}
          />
        </i>
      </ImageWrapper>
      <DataWrapper>
        <HeadingWrapper>
          <h6 className="dark:text-zinc-100">{product.name}</h6>
          <ul>
            <li>
              <FavoriteButton product={product}>
                <Favorite />
              </FavoriteButton>
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
              <strong className="dark:text-zinc-300">
                {formatAmount(product.price * amount)}
              </strong>
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
                className="text-zinc-900 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-100"
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
