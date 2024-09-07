'use client'

import { CartProps } from 'Types/Cart'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormSubmit } from '@components/dashboard/FormSubmit'
import { zodResolver } from '@hookform/resolvers/zod'
import { ScrollArea } from 'ui@components/scroll-area'
import { cn } from '~/lib/utils'
import { resolveProductImageUrl, validCardNumber } from '~/utils'

import { UserAddresses } from './UserAddresses'
import { UserCard } from './UserCard'
import { paymentMethodList, PaymentMethodListItemKey } from './paymentMethods'

type ContentProps = {
  cart: CartProps
}

type ContentComponent = React.FunctionComponent<ContentProps>

const CheckoutFormDataObjectSchema = z.object({
  card: z
    .object({
      number: z
        .string()
        .transform(number => number.replace(/[ -]/g, ''))
        .refine(validCardNumber),
      cvc: z.string().length(3),
      holder: z.string().min(4),
      expirationDate: z
        .string()
        .length(4)
        .transform(e => `-${e}`)
    })
    .nullish(),

  user: z.object({
    city: z.string(),
    zip: z.string(),
    address: z.string()
  })
})

type CheckoutFormDataObject = z.infer<typeof CheckoutFormDataObjectSchema>

const DEFAULT_PAYMENT_METHOD: PaymentMethodListItemKey = 'form:bank-transfer'

export const Content: ContentComponent = ({ cart }) => {
  const [userAddress, setUserAddress] = useState<string>(':none')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodListItemKey>(
    DEFAULT_PAYMENT_METHOD
  )

  const paymentMethodData = paymentMethodList.find(
    ({ key }) => paymentMethod === key
  )

  const form = useForm<CheckoutFormDataObject>({
    resolver: zodResolver(CheckoutFormDataObjectSchema)
  })

  const checkoutFormSubmitHandler = (checkoutData: CheckoutFormDataObject) => {
    console.log('>>> checkoutData => ', checkoutData)

    alert('LAs')
  }

  const userAddressChangeHandler = (selectedUserAddress: string) => {
    setUserAddress(selectedUserAddress)
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

            <UserCard cart={cart} />

            <div className="w-full block mb-9">
              <h3 className="mb-2 text-sm text-zinc-400 dark:text-zinc-300">
                Selecionar método de pagamento:
              </h3>
              <ul className="flex w-full flex-row flex-wrap">
                {paymentMethodList.map(({ key, icon: Icon, label }) => {
                  const selected = paymentMethod === key

                  return (
                    <li
                      className="inline-flex justify-center [&_button]:first:rounded-s-lg [&_button]:last:rounded-e-lg items-center"
                      key={key}
                    >
                      <button
                        type="button"
                        className={cn(
                          'flex gap-2 flex-row items-center bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 active:[&:not(disabled)]:scale-105 transition-transform dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 dark:text-zinc-50 outline-none border-0 py-2 px-3',
                          selected ? '!bg-blue-500 opacity-100' : ''
                        )}
                        onClick={() => {
                          form.reset()
                          setPaymentMethod(key)
                        }}
                        disabled={selected}
                      >
                        <i className="text-sm">
                          <Icon size={24} />
                        </i>
                        {selected ? <span>{label}</span> : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <FormProvider {...form}>
              <form
                method="post"
                action={`/api/me/cart/checkout/${cart.id}?ref=user.checkout.page`}
                onSubmit={form.handleSubmit(checkoutFormSubmitHandler)}
                className="w-ful block h-auto"
              >
                {/* Form Here */}

                {paymentMethodData && <paymentMethodData.form />}

                <h2 className="block text-xl w-full h-auto py-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
                  Endereço de entrega
                </h2>
                <p className="block w-full h-auto p-0 m-0 text-[11px] text-zinc-500 pr-16 dark:text-zinc-300">
                  Complete seu pedido selecionando um método e fornecendo os
                  seus dados de pagamento.
                </p>
                <br />
                <UserAddresses onChange={userAddressChangeHandler} />
                <br />
                {userAddress === ':none' && (
                  <Fragment>
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
                            {...form.register('user.address')}
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
                            {...form.register('user.city')}
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
                            {...form.register('user.zip')}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Fragment>
                )}

                <Row>
                  <Col>
                    <FormSubmit buttonStyle="success">
                      Finalizar pedido
                    </FormSubmit>
                  </Col>
                </Row>
              </form>
            </FormProvider>
          </Col>
        </Row>
      </div>
    </div>
  )
}
