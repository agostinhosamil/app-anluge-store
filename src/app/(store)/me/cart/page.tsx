"use client";

import Column from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { CartOrder } from "store@components/CartPage/CartOrder";
import {
  Container,
  ListWrapper,
  SubmitButton,
  SubmitButtonWrapper,
  TitleContainer,
} from "store@styles/cart-page";
import { range } from "~/utils";

export default function CartPage() {
  return (
    <Container>
      <Row>
        <Column lg={8} md={7}>
          <TitleContainer>
            <h1>Carrinho de compra ({5})</h1>
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
            {range(16).map((i) => (
              <CartOrder key={i} />
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
  );
}
