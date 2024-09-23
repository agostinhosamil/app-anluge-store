import { Fragment } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'

export const MulticaixaExpressForm = () => {
  const { register } = useFormContext()

  return (
    <Fragment>
      <h2 className="block w-full text-xl h-auto pb-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
        Multicaixa express
      </h2>
      <p className="block w-full h-auto p-0 m-0 text-sm text-zinc-500 pr-16 dark:text-zinc-300">
        Este método de pagamento requer que o número de telefone inserido esteja
        associado ao Multicaixa express. Para aprovar o pagamento tem de ter
        consigo o telefone ligado a internet com a aplicação do Multicaixa
        Express. Serviço disponível para as entidades bancárias Certificadas
        abaixo:
      </p>
      <br />
      <Row>
        <Col md={12}>
          <FloatingLabel
            controlId="card-holder"
            label="Número de telefone"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Número de telefone"
              autoComplete="off"
              {...register('user.phoneNumber')}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </Fragment>
  )
}
