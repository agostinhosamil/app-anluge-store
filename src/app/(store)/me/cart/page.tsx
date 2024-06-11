'use client'

import Column from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { CartOrder } from 'store@components/CartPage/CartOrder'
import { useStoreContext } from 'store@components/Context'
import {
  Container,
  ListWrapper,
  SubmitButton,
  SubmitButtonWrapper,
  TitleContainer
} from 'store@styles/cart-page'
import { EmptyListContainer } from '~/components/dashboard/styles'

export default function CartPage() {
  const { products } = useStoreContext()

  return (
    <Container>
      <Row>
        <Column lg={8} md={7}>
          <TitleContainer>
            <h1>Carrinho de compra ({products.length})</h1>
            <ol>
              <li>
                <Form.Check
                  label="Selecionar todos os itens"
                  type="checkbox"
                  id="mans"
                />
              </li>
              <li>
                <button type="button">Excluir itens selecionados</button>
              </li>
            </ol>
          </TitleContainer>
          <ListWrapper>
            {products.length < 1 && (
              <EmptyListContainer>
                <h1>O seu carrinho está vazio</h1>
                <h2>
                  Ao adicionar itens ao seu carrinho, os poderá consultar aqui.
                </h2>
              </EmptyListContainer>
            )}
            {products.map(product => (
              <CartOrder key={product.id} product={product} />
            ))}
          </ListWrapper>
          <ListWrapper>Pronto para finalizar?</ListWrapper>
          <SubmitButtonWrapper>
            <SubmitButton type="button">Finalizar compra</SubmitButton>
          </SubmitButtonWrapper>
        </Column>
        <Column lg={4} md={5}></Column>
      </Row>
    </Container>
  )
}
