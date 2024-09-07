'use client'

import { $Enums } from '@prisma/client'
import { default as Column } from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FaHeart, FaTrash } from 'react-icons/fa6'

import { EmptyListContainer } from '~/components/dashboard/styles'
import { UserProps } from '~/Types/UserProps'
import {
  Container,
  ListWrapper,
  MainListWrapper,
  TitleContainer
} from '../cart/styles'

import { Order } from './Order'

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
            <h1 className="dark:text-zinc-50">Meus pedidos</h1>
            <ol>
              <li>
                <Form.Check
                  label="Selecionar todos os itens"
                  type="checkbox"
                  id="mans"
                  className="dark:text-zinc-200"
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
                <h1 className="dark:text-zinc-50">Sem pedidos pendentes</h1>
                <h2 className="dark:text-zinc-200">
                  Os seus pedidos por receber ou pagar serão apresentados aqui.
                </h2>
              </EmptyListContainer>
            )}
            {carts.map(cart => (
              <Order key={cart.id} cart={cart} />
            ))}
          </MainListWrapper>
          <ListWrapper className="mb-14">
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
