'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { default as Col, default as Column } from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FaHeart, FaTrash } from 'react-icons/fa6'

import { EmptyListContainer } from '@components/dashboard/styles'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import deepmerge from 'deepmerge'
import { CartOrder } from 'store@components/CartPage/CartOrder'
import { useStoreContext } from 'store@components/Context'
import {
  CheckoutForm,
  CheckOutFormWrapper,
  CheckoutMessageWrapper,
  Container,
  FixedCheckoutFormWrapper,
  ListWrapper,
  MainListWrapper,
  StaticCheckoutFormWrapper,
  StyledLink,
  TitleContainer
} from 'store@styles/cart-page'
import { Partial } from '~/components/Partial'
import { getElementCoordinates } from '~/components/store/Header/helpers'
import { generateRandomId } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'
import { createOrder, OrderFormDataObject } from '~/utils/models/order'

export default function CartPage() {
  const [checkoutFormFixed, setCheckoutFormFixed] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const checkOutFormWrapperRef = useRef<HTMLDivElement>(null)

  const { products, clearCart } = useStoreContext()

  useEffect(() => {
    const windowScrollHandler = () => {
      updateFormState()
    }

    const windowResizeHandler = () => {
      updateFormState()
    }

    const updateFormState = () => {
      const checkOutFormWrapperElement = checkOutFormWrapperRef.current
      const pageMainHeaderElement = document.querySelector<HTMLElement>(
        'body > div > header'
      )
      const pageMainFooterElement = document.querySelector<HTMLElement>(
        'body > div > footer'
      )

      if (!(pageMainHeaderElement && checkOutFormWrapperElement)) {
        return
      }

      const pageMainHeaderCoordinates = getElementCoordinates(
        pageMainHeaderElement
      )
      const checkOutFormWrapperElementCoordinates = getElementCoordinates(
        checkOutFormWrapperElement
      )

      const pageMainFooterElementY = pageMainFooterElement
        ? pageMainFooterElement.getBoundingClientRect().top
        : 0

      const checkOutFormWrapperElementInView = Boolean(
        checkOutFormWrapperElementCoordinates.y < pageMainHeaderCoordinates.yh
      )

      const checkOutFormWrapperElementSurpassedFooterView = Boolean(
        pageMainFooterElementY - window.innerHeight <= 0
      )

      if (
        checkOutFormWrapperElementCoordinates.y < 0 &&
        !checkoutFormFixed &&
        !checkOutFormWrapperElementSurpassedFooterView
      ) {
        return setCheckoutFormFixed(true)
      }

      if (
        (checkOutFormWrapperElementInView ||
          checkOutFormWrapperElementSurpassedFooterView) &&
        checkoutFormFixed
      ) {
        setCheckoutFormFixed(false)
      }
    }

    updateFormState()

    window.addEventListener('scroll', windowScrollHandler)
    window.addEventListener('resize', windowResizeHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [checkoutFormFixed])

  // const checkoutButtonClickHandler = () => {}

  const checkoutFormSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    const userRandomPassword = generateRandomId()
    const defaultUserData = {
      user: {
        password: userRandomPassword,
        passwordConfirmation: userRandomPassword
      },

      orders: products.map(product => ({
        productId: product.id,
        quantity:
          typeof product.quantity === 'number'
            ? Math.floor(product.quantity)
            : 1,
        productName: product.name,
        productCode: product.code
      }))
    }

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    const jsonFormData = deepmerge(defaultUserData, formDataToJson(formData))

    const createdOrder = await createOrder(jsonFormData as OrderFormDataObject)

    if (createdOrder) {
      clearCart()

      alert('Pedido enviado com sucesso')
    }
  }

  const inputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement
    const inputElementName = inputElement.name
      .replace(/^(user\s*\[\s*)/i, '')
      .replace(/\s*\]$/, '')

    if (inputElementName in formData) {
      setFormData({
        ...formData,
        [inputElementName]: inputElement.value
      })
    }
  }

  const CheckoutFormContainer = checkoutFormFixed
    ? FixedCheckoutFormWrapper
    : StaticCheckoutFormWrapper

  return (
    <Container>
      <Row>
        <Column lg={8} md={7}>
          <TitleContainer>
            <h1>Carrinho de compra ({products.length})</h1>
            {products.length >= 1 && (
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
            )}
          </TitleContainer>
          <MainListWrapper>
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
          </MainListWrapper>
          <ListWrapper>Pronto para finalizar?</ListWrapper>
          <CheckoutMessageWrapper>
            <p>
              Ao prosseguir está ciente de que leu e concorda com os nossos{' '}
              <StyledLink href="/about/terms">termos de serviço</StyledLink>, a
              nossa{' '}
              <StyledLink href="/about/terms">
                política de uso de dados
              </StyledLink>{' '}
              bem como a nossa{' '}
              <StyledLink href="/about/terms">
                política de pagamentos
              </StyledLink>
              .
            </p>
          </CheckoutMessageWrapper>
          {/* <SubmitButtonWrapper>
            <SubmitButton
              type="button"
              disabled={products.length < 1}
              onClick={checkoutButtonClickHandler}
            >
              Finalizar compra
            </SubmitButton>
          </SubmitButtonWrapper> */}
        </Column>
        {products.length >= 1 && (
          <Column lg={4} md={5}>
            <CheckoutFormContainer>
              <CheckOutFormWrapper ref={checkOutFormWrapperRef}>
                <CheckoutForm
                  method="post"
                  action="/api/cart/checkout"
                  onSubmit={checkoutFormSubmitHandler}
                >
                  <Fragment>
                    <h1>Já tem tudo o o que precisava?</h1>
                    <p>Hora de finalizar.</p>
                    <Partial unAuth>
                      <Row>
                        <Col md={12}>
                          <FloatingLabel
                            controlId="user-name"
                            label="Nome completo"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Nome completo"
                              autoComplete="off"
                              name="user[name]"
                              value={formData.name}
                              onChange={inputChangeHandler}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <FloatingLabel
                            controlId="user-email"
                            label="Endereço de email"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Endereço de email"
                              autoComplete="off"
                              name="user[email]"
                              value={formData.email}
                              onChange={inputChangeHandler}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <FloatingLabel
                            controlId="user-phone"
                            label="Número de telefone (Whatsapp)"
                            className="mb-3"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Número de telefone (Whatsapp)"
                              autoComplete="off"
                              name="user[phone]"
                              value={formData.phone}
                              onChange={inputChangeHandler}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </Partial>
                    <Row>
                      <Col md={12}>
                        <FormSubmit>Solicitar orçamento</FormSubmit>
                      </Col>
                    </Row>
                  </Fragment>
                </CheckoutForm>
              </CheckOutFormWrapper>
            </CheckoutFormContainer>
          </Column>
        )}
      </Row>
    </Container>
  )
}
