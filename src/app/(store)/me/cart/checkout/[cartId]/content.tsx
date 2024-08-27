'use client'

import { CartProps } from 'Types/Cart'
import Image from 'next/image'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormSubmit } from '~/components/dashboard/FormSubmit'
import { ScrollArea } from '~/components/ui/scroll-area'
import {
  resolveProductImageUrl,
  resolveUserAvatarUrl,
  validCardNumber
} from '~/utils'

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
    <div className="w-full max-w-[1320px] h-auto m-auto block relative">
      <div className="w-full h-auto py-14 px-[4%]">
        <Row>
          <Col md={6}>
            <h1 className="font-bold text-2xl text-zinc-700 pr-16 dark:text-zinc-50 dark:font-extrabold">
              Resumo do pedido
            </h1>
            <h2 className="block w-full text-xl h-auto py-3 font-normal text-zinc-800 pr-16 dark:text-zinc-200">
              Itens a adquirir ({cart.orders.length})
            </h2>
            <p className="block w-full h-auto p-0 m-0 text-[11px] text-zinc-500 pr-16 dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              commodi cupiditate, quis deserunt dolorem architecto ut, sequi
              dolore necessitatibus id aliquid, eos perspiciatis omnis
              voluptatibus fugit ipsam similique voluptates quisquam?
            </p>
            <div className="w-full h-auto my-10 min-[1200px]:max-h-[850px] min-[1200px]:pr-16">
              <ul className="w-full h-auto block min-[1200px]:max-h-[770px] min-[1200px]:overflow-y-auto min-[1200px]:p-10 min-[1200px]:border-1 min-[1200px]:border-solid min-[1200px]:border-zinc-300 min-[1200px]:dark:border-zinc-700 min-[1200px]:rounded-lg">
                <ScrollArea>
                  {cart.orders.map(({ product }) => (
                    <li
                      key={product.id}
                      className="w-full h-auto flex flex-row items-center mt-6 first:mt-0"
                    >
                      <div className="flex flex-col mr-3 size-[60px]">
                        <i>
                          <Image
                            width={60}
                            height={60}
                            alt={product.name}
                            src={resolveProductImageUrl(product)}
                            className="rounded-full outline-none border-0 bg-zinc-300 dark:bg-zinc-800"
                          />
                        </i>
                      </div>
                      <data className="inline-flex w-full items-center">
                        <h5 className="dark:text-zinc-100">{product.name}</h5>
                      </data>
                    </li>
                  ))}
                </ScrollArea>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <h1 className="font-bold text-2xl text-zinc-700 pr-16 mb-3 dark:text-zinc-50 dark:font-extrabold">
              Checkout
            </h1>
            <h2 className="block w-full text-xl h-auto py-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
              Dados do cartão
            </h2>
            <p className="block w-full h-auto p-0 m-0 text-[11px] text-zinc-500 pr-16 dark:text-zinc-300">
              Complete seu pedido selecionando um método e fornecendo os seus
              dados de pagamento.
            </p>

            <div className="w-full h-auto bg-gray-200 dark:bg-zinc-900 rounded-xl p-6 my-9">
              <div className="w-full h-auto flex flex-row items-center">
                <div className="size-16 mr-5">
                  <Image
                    width={60}
                    height={60}
                    alt={String(cart.user?.name)}
                    src={resolveUserAvatarUrl(cart.user?.image)}
                    className="border-0 outline-none rounded-full"
                  />
                </div>
                <data className="w-full inline-flex flex-col [&_*]:pointer-events-none [&_*]:select-none">
                  <strong className="text-2xl font-bold text-zinc-800 dark:text-zinc-50">
                    {cart.user?.name}
                  </strong>
                  <span className="text-zinc-600 text-[14px] dark:text-zinc-300">
                    {cart.user?.email}
                  </span>
                </data>
              </div>
            </div>
            <form
              method="post"
              action={`/api/me/cart/checkout/${cart.id}?ref=user.checkout.page`}
              onSubmit={handleSubmit(checkoutFormSubmitHandler)}
              className="w-ful block h-auto"
            >
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="card-number"
                    label="Número do cartão"
                    className="mb-3 bootstrap-floating-label"
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
                    className="mb-3 bootstrap-floating-label"
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
                    className="mb-3 bootstrap-floating-label"
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
                    className="mb-3 bootstrap-floating-label"
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
              <h2 className="block text-xl w-full h-auto py-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
                Endereço de entrega
              </h2>
              <p className="block w-full h-auto p-0 m-0 text-[11px] text-zinc-500 pr-16 dark:text-zinc-300">
                Complete seu pedido selecionando um método e fornecendo os seus
                dados de pagamento.
              </p>
              <br />
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="user-address"
                    label="Endereço (Sector, Rua, Bairro)"
                    className="mb-3 bootstrap-floating-label"
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
                    className="mb-3 bootstrap-floating-label"
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
                    className="mb-3 bootstrap-floating-label"
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
            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}
