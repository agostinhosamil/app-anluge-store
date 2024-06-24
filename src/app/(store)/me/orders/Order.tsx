import Link from 'next/link'
import { Fragment, useState } from 'react'
import { FaCopy, FaEye, FaTrash } from 'react-icons/fa6'

import { Partial } from '~/components/Partial'
import { OrderContainer, OrderItemContainer } from './styles'

import { CartProps } from '~/Types/Cart'
import { Dialog } from '~/components/Dialog'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { resolveProductImageUrl } from '~/utils'

type CartStatusLabelMap = {
  [key: string]: string
}

type OrderProps = {
  cart: CartProps
}

type OrderComponent = React.FunctionComponent<OrderProps>

export const Order: OrderComponent = ({ cart }) => {
  const [showOrderDetailsDialog, setShowOrderDetailsDialog] =
    useState<boolean>(false)

  const copyCartTrackingCodeButtonClickHandler = () => {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      navigator.clipboard.writeText(cart.code)
    }
  }

  const cartStatusLabelMap: CartStatusLabelMap = {
    PROGRESS: 'Por receber',
    PENDING: 'Por finalizar'
  }

  const showOrderDetailsButtonClickHandler = () => {
    setShowOrderDetailsDialog(true)
  }

  const orderDetailsDialogCloseHandler = () => {
    setShowOrderDetailsDialog(false)
  }

  return (
    <Fragment>
      <OrderContainer>
        <data>
          <h5>
            {cart.code}
            <i>
              <button
                type="button"
                onClick={copyCartTrackingCodeButtonClickHandler}
              >
                <FaCopy />
              </button>
            </i>
          </h5>
          <strong>{cartStatusLabelMap[cart.status]}</strong>
        </data>
        <ul>
          <Partial refine={() => cart.status !== 'PROGRESS'}>
            <li>
              <Link href={`/me/cart/checkout/${cart.id}?ref=orders`}>
                Finalizar pedido
              </Link>
            </li>
          </Partial>
          <Partial refine={() => cart.status === 'PROGRESS'}>
            <li>
              <Link href={`/me/orders/track/${cart.code}?ref=orders`}>
                Rastrear pedido
              </Link>
            </li>
          </Partial>
          <li>
            <button
              type="button"
              role="button"
              title="Ver detalhes do pedido"
              onClick={showOrderDetailsButtonClickHandler}
            >
              <i>
                <FaEye />
              </i>
            </button>
          </li>
          <li>
            <Link
              href={`/me/orders/${cart.id}/cancel?ref=orders`}
              title="Cancelar pedido"
            >
              <i>
                <FaTrash />
              </i>
            </Link>
          </li>
        </ul>
      </OrderContainer>
      <Dialog
        closeButtonLabel="Fechar"
        onClose={orderDetailsDialogCloseHandler}
        show={showOrderDetailsDialog}
        size="xx-large"
        title="Detalhes do pedido"
      >
        <TouchSlider showButtons={true}>
          {cart.orders.map(({ product, ...order }) => (
            <Slide key={order.id}>
              <OrderItemContainer>
                <a
                  href={`/products/${product.slag}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    style={{
                      backgroundImage: `url(${resolveProductImageUrl(product)})`
                    }}
                  />
                  <strong>{product.name}</strong>
                  <span>{order.quantity}</span>
                </a>
              </OrderItemContainer>
            </Slide>
          ))}
        </TouchSlider>
      </Dialog>
    </Fragment>
  )
}
