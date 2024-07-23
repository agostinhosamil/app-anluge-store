'use client'

import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/navigation'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { default as Col, default as Column } from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'
import { FaHeart, FaTrash } from 'react-icons/fa6'
import { z } from 'zod'

import { EmptyListContainer } from '@components/dashboard/styles'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { CartOrder } from 'store@components/CartPage/CartOrder'
import { useStoreContext } from 'store@components/Context'
import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { getElementCoordinates } from '~/components/store/Header/helpers'
import { LoadingScreen } from '~/components/styled'
import { generateRandomId, validPhoneNumber } from '~/utils'
import { signIn } from '~/utils/auth/client'
import { CreateOrderRequestResponse } from '~/utils/models/order'
import { getUsers } from '~/utils/models/user'
import { redirect } from '~/utils/navigation'
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
} from './styles'
import { createUserOrder } from './utils'

type LoadingState = 'DEFINING_PASSWORD' | 'SUBMITTING_REQUEST' | undefined

const CheckoutFormDataSchema = z
  .object({
    user: z.optional(
      z.object({
        name: z.string().min(4),
        email: z
          .string()
          .email()
          .transform(email => email.toLowerCase()),
        phone: z
          .string()
          .transform(phone => phone.toLowerCase().replaceAll(' ', ''))
          .refine(phone => validPhoneNumber(phone))
      })
    ),

    auth: z.object({
      csrfToken: z.string()
    })
  })
  .default({
    auth: {
      csrfToken: ''
    },
    user: undefined
  })

type CheckoutFormData = z.infer<typeof CheckoutFormDataSchema>

export default function CartPage() {
  const [loading, setLoading] = useState<LoadingState>()
  // const [showDefinePasswordDialog, setShowDefinePasswordDialog] =
  //   useState<boolean>(false)

  const [readyToCheckout, setReadyToCheckout] = useState<boolean>(false)
  const [checkoutFormFixed, setCheckoutFormFixed] = useState<boolean>(false)
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: ''
  // })

  const { register, handleSubmit } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormDataSchema)
  })

  // const createdUserState = useRef<UserProps>()
  const checkOutFormWrapperRef = useRef<HTMLDivElement>(null)
  const createdOrderState = useRef<CreateOrderRequestResponse>()
  const checkOutFormWrapperElementCoordinatesYh = useRef<number>()

  const { products, clearCart } = useStoreContext()
  const { auth, requestSignIn } = useAuthenticationContext()

  // const router = useRouter()

  // const cartOrdersFactory = () =>
  //   products.map(product => ({
  //     productId: product.id,
  //     quantity:
  //       typeof product.quantity === 'number' ? Math.floor(product.quantity) : 1,
  //     productName: product.name,
  //     productCode: product.code
  //   }))

  const isLoading = (state: LoadingState): boolean => {
    return Boolean(state) && state === loading
  }

  useEffect(() => {
    const createdOrder = createdOrderState.current

    if (readyToCheckout && products.length < 1 && createdOrder?.success) {
      const { cart } = createdOrder

      redirect(`/me/cart/checkout/${cart.id}`)
    }
  }, [products, readyToCheckout])

  useEffect(() => {
    const windowScrollHandler = () => {
      updateFormState()
    }

    const windowResizeHandler = () => {
      updateFormState()
    }

    const getHeaderMenuFixedWrapperHeight = () => {
      const headerMenuFixedWrapper = document.getElementById(
        'data-page-main-header-menu-fixed-wrapper'
      )

      if (headerMenuFixedWrapper) {
        return headerMenuFixedWrapper.offsetHeight
      }

      return 0
    }

    const updateFormState = () => {
      if (loading) {
        return
      }

      const checkOutFormWrapperElement = checkOutFormWrapperRef.current
      const pageMainHeaderElement = document.querySelector<HTMLElement>(
        'body > div > header'
      )
      const headerMenuFixedWrapperHeight = getHeaderMenuFixedWrapperHeight()
      const pageMainFooterElement = document.querySelector<HTMLElement>(
        'body > div > footer'
      )

      if (
        !(
          pageMainHeaderElement &&
          checkOutFormWrapperElement &&
          pageMainFooterElement
        )
      ) {
        return
      }

      const pageMainHeaderCoordinates = getElementCoordinates(
        pageMainHeaderElement
      )
      const pageMainFooterCoordinates = getElementCoordinates(
        pageMainFooterElement
      )
      const checkOutFormWrapperElementCoordinates = getElementCoordinates(
        checkOutFormWrapperElement
      )

      const checkOutFormWrapperElementCoordinatesYhValue =
        checkOutFormWrapperElementCoordinatesYh.current ||
        checkOutFormWrapperElementCoordinates.yh

      const checkOutFormWrapperElementSurpassesFooter = Boolean(
        pageMainFooterCoordinates.y <=
          checkOutFormWrapperElementCoordinatesYhValue
      )

      if (
        checkOutFormWrapperElementCoordinates.y <=
          headerMenuFixedWrapperHeight &&
        !checkOutFormWrapperElementSurpassesFooter
      ) {
        return setCheckoutFormFixed(true)
      }

      if (
        pageMainHeaderCoordinates.yh >= checkOutFormWrapperElementCoordinates.y
      ) {
        return setCheckoutFormFixed(false)
      }

      if (checkOutFormWrapperElementSurpassesFooter) {
        checkOutFormWrapperElementCoordinatesYh.current =
          checkOutFormWrapperElementCoordinatesYhValue
        return setCheckoutFormFixed(false)
      }

      // const pageMainFooterElementY = pageMainFooterElement
      //   ? pageMainFooterElement.getBoundingClientRect().top
      //   : 0

      // const checkOutFormWrapperElementInView = Boolean(
      //   checkOutFormWrapperElementCoordinates.y < pageMainHeaderCoordinates.yh
      // )

      // const checkOutFormWrapperElementSurpassedFooterView = Boolean(
      //   pageMainFooterElementY - window.innerHeight <= 0
      // )

      // if (
      //   checkOutFormWrapperElementCoordinates.y < 0 &&
      //   !checkoutFormFixed &&
      //   !checkOutFormWrapperElementSurpassedFooterView
      // ) {
      //   return setCheckoutFormFixed(true)
      // }

      // if (
      //   (checkOutFormWrapperElementInView ||
      //     checkOutFormWrapperElementSurpassedFooterView) &&
      //   checkoutFormFixed
      // ) {
      //   setCheckoutFormFixed(false)
      // }
    }

    updateFormState()

    window.addEventListener('scroll', windowScrollHandler)
    window.addEventListener('resize', windowResizeHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [loading])

  // const checkoutButtonClickHandler = () => {}

  const goToCheckoutPage = () => {
    clearCart()

    setReadyToCheckout(true)
  }

  const checkoutFormSubmitHandler = async (data: CheckoutFormData) => {
    setLoading('SUBMITTING_REQUEST')

    setCheckoutFormFixed(false)

    if (auth.user) {
      const user = auth.user

      const order = await createUserOrder({
        user,
        products
      })

      createdOrderState.current = order

      if (order.success) {
        return goToCheckoutPage()
      } else {
        // TODO: handle this error appropriately
        alert('Could not create order [#01]')
        return setLoading(undefined)
      }
    }

    if (!data.user) {
      return
    }

    const userData = data.user

    // setCheckoutFormFixed(false)

    // const userRandomPassword = generateRandomId()
    // const defaultUserData = {
    //   user: auth.user
    //     ? {
    //         ...auth.user,
    //         passwordConfirmation: auth.user.password
    //       }
    //     : {
    //         password: userRandomPassword,
    //         passwordConfirmation: userRandomPassword,
    //         phone: '',
    //         email: ''
    //       },

    //   orders: cartOrdersFactory()
    // }

    // const formElement = event.target as HTMLFormElement
    // const formData = new FormData(formElement)
    // const jsonFormData = deepmerge(defaultUserData, formDataToJson(formData))

    /**
     * Create order and go to checkout page if the user is already authenticated
     */
    // if (auth.user) {
    //   const createdOrder = await createOrder(
    //     jsonFormData as OrderFormDataObject
    //   )

    //   if (createdOrder) {
    //     return goToCheckoutPage()
    //   } else {
    //     // TODO: handle this error appropriately
    //     alert('Could not create order')
    //     return setLoading(false)
    //   }
    // }

    const existingUserMatchingFormData = await getUsers(
      `or.match.phone:equals=${userData.phone}&`.concat(
        `or.match.email:equals=${userData.email}`
      )
    )

    const [user] = existingUserMatchingFormData

    if (user) {
      // request user password

      // createdUserState.current = user
      // console.log('>>> call requestSignIn user: user', user)

      const signInResponse = await requestSignIn(user)

      if (signInResponse) {
        const { user } = signInResponse

        const order = await createUserOrder({
          products,
          user
        })

        createdOrderState.current = order

        if (order.success) {
          return goToCheckoutPage()
        } else {
          // TODO: handle this error appropriately
          alert('Could not create order')
          return setLoading(undefined)
        }
      }

      alert('incorrect user password')

      setLoading(undefined)

      return
    }

    // setShowDefinePasswordDialog(true)

    const password = generateRandomId()

    const order = await createUserOrder({
      products,
      user: {
        ...data.user,
        password
      }
    })

    createdOrderState.current = order

    if (order.success) {
      const signInResponse = await signIn({
        password,
        username: data.user.email
      })

      if (signInResponse) {
        return goToCheckoutPage()
      }

      alert('Could not login')
      return setLoading(undefined)
    } else {
      // TODO: handle this error appropriately
      alert('Could not create order')
      return setLoading(undefined)
    }

    // const createdOrder = await createOrder(jsonFormData as OrderFormDataObject)

    // if (createdOrder) {
    //   const { cart } = createdOrder

    /**
     * if user is authenticated
     *   redirect to checkout page
     * else
     *   if new user created
     *     show define password form
     *     login (headless)
     *     redirect to checkout page
     *   else
     *      request password
     *      login
     *      redirect to checkout page
     */

    // if (auth.user) {
    //   return goToCheckoutPage()
    // }

    // const newUserCreated = cart.user
    //   ? await Hash.compare(userRandomPassword, cart.user.password)
    //   : true

    // if (!newUserCreated) {
    //   // const signInResponse = await signInById(cart.user?.id || '')

    //   // if (signInResponse) {
    //   //   return goToCheckoutPage()
    //   // }

    //   // return alert('Could not login')
    //   return setShowEnterPasswordDialog(true)
    // }

    //   createdUserState.current = cart.user || undefined

    //   clearCart()

    //   setShowDefinePasswordDialog(true)
    // }

    // setLoading(false)
  }

  // const inputChangeHandler: React.ChangeEventHandler = event => {
  //   const inputElement = event.target as HTMLInputElement
  //   const inputElementName = inputElement.name
  //     .replace(/^(user\s*\[\s*)/i, '')
  //     .replace(/\s*\]$/, '')

  //   if (inputElementName in formData) {
  //     setFormData({
  //       ...formData,
  //       [inputElementName]: inputElement.value
  //     })
  //   }
  // }

  // const definePasswordDialogCloseHandler = async () => {
  //   // if (createdUserState.current) {
  //   //   const signInResponse = await signInById(createdUserState.current.id)

  //   //   if (signInResponse) {
  //   //     return goToCheckoutPage()
  //   //   }

  //   //   setShowDefinePasswordDialog(false)

  //   //   return alert('Could not login')
  //   // }

  //   setShowDefinePasswordDialog(false)
  // }

  // const enterPasswordDialogCloseHandler = () => {
  //   setShowEnterPasswordDialog(false)
  // }

  // const definePasswordFormSubmitHandler: React.FormEventHandler =
  //   async event => {
  //     event.preventDefault()
  //   }

  // const enterPasswordFormSubmitHandler: React.FormEventHandler =
  //   async event => {
  //     event.preventDefault()

  //   }

  const CheckoutFormContainer = checkoutFormFixed
    ? FixedCheckoutFormWrapper
    : StaticCheckoutFormWrapper

  return (
    <Container>
      {isLoading('SUBMITTING_REQUEST') && (
        <LoadingScreen>
          <i>
            <Spinner />
          </i>
          <span>A processar pedidos...</span>
        </LoadingScreen>
      )}
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
                  onSubmit={handleSubmit(checkoutFormSubmitHandler)}
                >
                  <Fragment>
                    <h1>Já tem tudo o que precisava?</h1>
                    <p>Hora de finalizar.</p>
                    {!auth.user && (
                      <Fragment>
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
                                {...register('user.name')}
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
                                {...register('user.email')}
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
                                {...register('user.phone')}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Fragment>
                    )}
                    <input
                      type="hidden"
                      value={generateRandomId()}
                      {...register('auth.csrfToken')}
                    />
                    <Row>
                      <Col md={12}>
                        <FormSubmit>Finalizar pedido</FormSubmit>
                      </Col>
                    </Row>
                  </Fragment>
                </CheckoutForm>
              </CheckOutFormWrapper>
            </CheckoutFormContainer>
          </Column>
        )}
      </Row>
      {/* <Dialog
        title="Definir palavra passe"
        show={showDefinePasswordDialog}
        size="large"
        onClose={definePasswordDialogCloseHandler}
        closeButtonLabel="Fazer isso depois"
      >
        <form
          method="post"
          action="/api/users/{id}/define-password"
          onSubmit={event => definePasswordFormSubmitHandler(event)}
        >
          {isLoading('DEFINING_PASSWORD') && (
            <LoadingScreen>
              <i>
                <Spinner />
              </i>
              <span>Definindo palavra passe...</span>
            </LoadingScreen>
          )}
          <DefinePasswordDialogParagraph>
            Defina uma palavra passe para usares ao acessar a plataforma da
            próxima vez ou a partir de outro dispositivo.
          </DefinePasswordDialogParagraph>
          <Row>
            <Col md={6}>
              <FloatingLabel
                controlId="user-password"
                label="Palavra passe"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Palavra passe"
                  autoComplete="off"
                  name="user[password]"
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel
                controlId="user-password-confirmation"
                label="Confirme a palavra passe"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Confirme a palavra passe"
                  autoComplete="off"
                  name="user[passwordConfirmation]"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormSubmit loading={isLoading('DEFINING_PASSWORD')}>
                Definir
              </FormSubmit>
            </Col>
          </Row>
        </form>
      </Dialog> */}
      {/* <Dialog
        title="Iniciar sessão"
        show={showEnterPasswordDialog}
        size="large"
        onClose={enterPasswordDialogCloseHandler}
      >
        <form
          method="post"
          // action="/api/users/{id}/define-password"
          onSubmit={event => enterPasswordFormSubmitHandler(event)}
        >
          {enterPasswordDialogLoading && (
            <LoadingScreen>
              <i>
                <Spinner />
              </i>
              <span>A iniciar sessão...</span>
            </LoadingScreen>
          )}
          <DefinePasswordDialogParagraph>
            Inicie sessão com a sua palavra passe para finalizar o seu pedido.
          </DefinePasswordDialogParagraph>
          <Row>
            <Col md={12}>
              <FloatingLabel
                controlId="user-password"
                label="Palavra passe"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Palavra passe"
                  autoComplete="off"
                  name="user[password]"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormSubmit loading={definePasswordDialogLoading}>
                Iniciar sessão
              </FormSubmit>
            </Col>
          </Row>
        </form>
      </Dialog> */}
    </Container>
  )
}
