'use client'

import { default as Column } from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FaEye, FaHeart, FaTrash } from 'react-icons/fa6'

import { $Enums } from '@prisma/client'
import { EmptyListContainer } from '~/components/dashboard/styles'
import { UserProps } from '~/Types/UserProps'
import {
  Container,
  ListWrapper,
  MainListWrapper,
  TitleContainer
} from '../cart/styles'

import Link from 'next/link'
import { Partial } from '~/components/Partial'
import { OrderContainer } from './styles'

type ContentProps = {
  user: UserProps
}

type ContentComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentProps
>

export const Content: ContentComponent = ({ user }) => {
  const openCartStatus: Array<$Enums.CartStatus> = [
    $Enums.CartStatus.PENDING,
    $Enums.CartStatus.PROGRESS
  ]

  const carts = user.carts.filter(cart =>
    Boolean(openCartStatus.includes(cart.status))
  )

  return (
    <Container>
      <Row>
        <Column lg={8} md={7}>
          <TitleContainer>
            <h1>Meus pedidos</h1>
            <ol>
              <li>
                <Form.Check
                  label="Selecionar todos os itens"
                  type="checkbox"
                  id="mans"
                />
              </li>
              <li>
                <button type="button">
                  <i>
                    <FaTrash />
                  </i>
                  <span>Excluir itens selecionados</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <i>
                    <FaHeart />
                  </i>
                  <span>Salvar itens selecionados</span>
                </button>
              </li>
            </ol>
          </TitleContainer>
          <MainListWrapper>
            {carts.length < 1 && (
              <EmptyListContainer>
                <h1>Sem pedidos pendentes</h1>
                <h2>
                  Os seus pedidos por receber ou pagar serão apresentados aqui.
                </h2>
              </EmptyListContainer>
            )}
            {carts.map(cart => (
              <OrderContainer key={cart.id}>
                <data>
                  <h5>{cart.id}</h5>
                  <strong>{cart.status}</strong>
                </data>
                <ul>
                  <Partial refine={() => cart.status !== 'PROGRESS'}>
                    <li>
                      <Link href={`/me/cart/checkout/${cart.id}?ref=orders`}>
                        Finalizar pedido
                      </Link>
                    </li>
                  </Partial>
                  <li>
                    <button>
                      <i>
                        <FaEye />
                      </i>
                    </button>
                  </li>
                </ul>
              </OrderContainer>
            ))}
          </MainListWrapper>
          <ListWrapper>
            <ol>
              <li>
                <button type="button">
                  <i>
                    <FaTrash />
                  </i>
                  <span>Ver pedidos finalizados</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <i>
                    <FaHeart />
                  </i>
                  <span>Ver pedidos cancelados</span>
                </button>
              </li>
            </ol>
          </ListWrapper>
        </Column>
        {/* <Column lg={4} md={5}>
          A
        </Column> */}
      </Row>
    </Container>
  )
}
