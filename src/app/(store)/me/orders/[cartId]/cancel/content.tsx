'use client'

import { CartProps } from 'Types/Cart'
import { Container } from '~/components/styled'
import { PageWrapper } from './styles'

type ContentProps = {
  cart: CartProps
}

type ContentComponent = React.FunctionComponent<ContentProps>

export const Content: ContentComponent = props => {
  return (
    <Container>
      <PageWrapper>
        <h1>Cancel cart: {props.cart.code}</h1>
      </PageWrapper>
    </Container>
  )
}
