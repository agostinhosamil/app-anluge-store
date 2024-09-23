import { Fragment } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'

export const CreditCardForm = () => {
  const { register } = useFormContext()

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
    <Fragment>
      <h2 className="block w-full text-xl h-auto pb-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
        Dados do cartão
      </h2>
      <p className="block w-full h-auto p-0 m-0 text-sm text-zinc-500 pr-16 dark:text-zinc-300">
        Complete seu pedido selecionando um método e fornecendo os seus dados de
        pagamento.
      </p>
      <br />
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
    </Fragment>
  )
}
