'use client'

import { Container } from '@components/styled'
import { CartProps } from 'Types/Cart'
import Image from 'next/image'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormSubmit } from '~/components/dashboard/FormSubmit'
import {
  resolveProductImageUrl,
  resolveUserAvatarUrl,
  validCardNumber
} from '~/utils'
import {
  CardAvatar,
  CardAvatarWrapper,
  CardBody,
  CardContainer,
  CardData,
  CardSubTitle,
  CardTitle,
  CartSummaryContainer,
  CheckoutFormContainer,
  ContentBody,
  Paragraph,
  SubTitle,
  Title
} from './styles'

type ContentProps = {
  cart: CartProps
}

type ContentComponent = React.FunctionComponent<ContentProps>

const CheckoutFormDataObjectSchema = z.object({
  card: z.object({
    number: z
      .string()
      .transform(number => number.replace(/[ -]/g, ''))
      .refine(number => {
        return validCardNumber(number)
      }),
    cvc: z.string().length(3),
    holder: z.string().min(4),
    expirationDate: z
      .string()
      .length(4)
      .transform(e => `-${e}`)
  }),

  user: z.object({
    city: z.string(),
    zip: z.string(),
    address: z.string()
  })
})

type CheckoutFormDataObject = z.infer<typeof CheckoutFormDataObjectSchema>

export const Content: ContentComponent = ({ cart }) => {
  const { register, handleSubmit } = useForm<CheckoutFormDataObject>({
    resolver: zodResolver(CheckoutFormDataObjectSchema)
  })

  const checkoutFormSubmitHandler = (checkoutData: CheckoutFormDataObject) => {
    console.log('>>> checkoutData => ', checkoutData)
  }

  const cardExpirationDateInputFocusHandler: React.FocusEventHandler =
    event => {
      const inputElement = event.target as HTMLInputElement

      inputElement.select()
    }

  const cardExpirationDateInputChangeHandler: React.ChangeEventHandler =
    event => {
      const inputElement = event.target as HTMLInputElement

      const sanitizedInputValue = inputElement.value.replaceAll(/[^0-9]/g, '')
      const inputValueChars = sanitizedInputValue.split('')

      const newInputValue = [
        inputValueChars.slice(0, 2).join(''),
        inputValueChars.slice(2, 4).join('')
      ]

      inputElement.value = newInputValue.join(
        inputValueChars.length >= 3 ? '/' : ''
      )
    }

  return (
    <Container>
      <ContentBody>
        <Row>
          <Col md={6}>
            <Title>Resumo do pedido</Title>
            <SubTitle>Itens a adquirir ({cart.orders.length})</SubTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              commodi cupiditate, quis deserunt dolorem architecto ut, sequi
              dolore necessitatibus id aliquid, eos perspiciatis omnis
              voluptatibus fugit ipsam similique voluptates quisquam?
            </Paragraph>
            <CartSummaryContainer>
              <ul>
                {cart.orders.map(({ product }) => (
                  <li key={product.id}>
                    <div>
                      <i>
                        <Image
                          width={60}
                          height={60}
                          alt={product.name}
                          src={resolveProductImageUrl(product)}
                        />
                      </i>
                    </div>
                    <data>
                      <h5>{product.name}</h5>
                    </data>
                  </li>
                ))}
              </ul>
            </CartSummaryContainer>
          </Col>
          <Col md={6}>
            <Title>Checkout</Title>
            <br />
            <SubTitle>Dados do cartão</SubTitle>
            <Paragraph>
              Complete seu pedido selecionando um método e fornecendo os seus
              dados de pagamento.
            </Paragraph>
            <CardContainer>
              <CardBody>
                <CardAvatarWrapper>
                  <CardAvatar
                    width={60}
                    height={60}
                    alt={String(cart.user?.name)}
                    src={resolveUserAvatarUrl(cart.user?.image)}
                  />
                </CardAvatarWrapper>
                <CardData>
                  <CardTitle>{cart.user?.name}</CardTitle>
                  <CardSubTitle>{cart.user?.email}</CardSubTitle>
                </CardData>
              </CardBody>
            </CardContainer>
            <CheckoutFormContainer
              method="post"
              action={`/api/me/cart/checkout/${cart.id}?ref=user.checkout.page`}
              onSubmit={handleSubmit(checkoutFormSubmitHandler)}
            >
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="card-number"
                    label="Número do cartão"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Número do cartão"
                      autoComplete="off"
                      {...register('card.number')}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel
                    controlId="card-expiration-date"
                    label="MM/AA"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="MM/AA"
                      autoComplete="off"
                      onFocus={cardExpirationDateInputFocusHandler}
                      {...register('card.expirationDate', {
                        onChange: cardExpirationDateInputChangeHandler
                      })}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel
                    controlId="card-cvc"
                    label="CVC"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="CVC"
                      autoComplete="off"
                      {...register('card.cvc')}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="card-holder"
                    label="Titular do cartão"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Titular do cartão"
                      autoComplete="off"
                      {...register('card.holder')}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <SubTitle>Endereço de entrega</SubTitle>
              <Paragraph>
                Complete seu pedido selecionando um método e fornecendo os seus
                dados de pagamento.
              </Paragraph>
              <br />
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="user-address"
                    label="Endereço (Sector, Rua, Bairro)"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Endereço (Sector, Rua, Bairro)"
                      autoComplete="off"
                      {...register('user.address')}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="user-city"
                    label="Cidade (Província)"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Cidade (Província)"
                      autoComplete="off"
                      {...register('user.city')}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="user-address"
                    label="Código postal"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Código postal"
                      autoComplete="off"
                      {...register('user.zip')}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormSubmit buttonStyle="success">
                    Finalizar pedido
                  </FormSubmit>
                </Col>
              </Row>
            </CheckoutFormContainer>
          </Col>
        </Row>
      </ContentBody>
    </Container>
  )
}
