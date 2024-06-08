import { Dialog } from '@components/Dialog'
import { ProductRate } from 'store@components/ProductPage/ProductRate'
import { ProductPageProps } from 'store@components/pages/products/page'
import { Title } from 'store@styles/product-page'

import { Fragment, useState } from 'react'
import { Container, ViewListButtonWrapper } from './styles'

export const ProductRates = ({ product }: ProductPageProps) => {
  const [showRatesDialog, setShowRatesDialog] = useState<boolean>(false)

  if (!(product.rates && product.rates.length >= 1)) {
    return null
  }

  const ratesListDialogCloseHandler = () => {
    setShowRatesDialog(false)
  }

  const showRatesButtonClickHandler = () => {
    setShowRatesDialog(true)
  }

  const Content = ({ count = -1 }) => {
    return (
      <Container>
        <Title $size={23}>O que as pessoas dizem sobre este produto</Title>
        {product.rates.slice(0, count).map(rate => (
          <ProductRate key={rate.id} rate={rate} />
        ))}
        {!showRatesDialog && (
          <ViewListButtonWrapper>
            <button
              type="button"
              role="button"
              onClick={showRatesButtonClickHandler}
            >
              Ver mais avaliações
            </button>
          </ViewListButtonWrapper>
        )}
      </Container>
    )
  }

  return (
    <Fragment>
      <Content count={3} />
      <Dialog
        size="medium"
        closeButtonLabel="Fechar"
        onClose={ratesListDialogCloseHandler}
      >
        <Content />
      </Dialog>
    </Fragment>
  )
}
