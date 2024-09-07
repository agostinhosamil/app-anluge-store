import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { z } from 'zod'

import { LongTextField } from '@components/Form/LongTextField'
import { FormSubmit } from 'dashboard@components/FormSubmit'

export const CreateServiceFormDataObjectSchema = z.object({
  service: z.object({
    title: z.string().min(3),
    description: z.string().min(3)
  })
})

export type CreateServiceFormDataObject = z.infer<
  typeof CreateServiceFormDataObjectSchema
>

type CreateServiceFormProps = {
  data?: CreateServiceFormDataObject
}

type CreateServiceFormComponent =
  React.FunctionComponent<CreateServiceFormProps>

export const CreateServiceForm: CreateServiceFormComponent = ({ data }) => {
  return (
    <form className="w-full pt-2 pb-0 flex flex-col">
      <Row>
        <Col md={12}>
          <strong className="mb-4 text-2xl font-semibold inline-block dark:text-zinc-50">
            Registrar serviço
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FloatingLabel
            controlId="service-title"
            label="Título"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Título"
              autoComplete="off"
              name="service[title]"
              defaultValue={data?.service.title}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <LongTextField
            label="Descrição"
            rows={2}
            name="service[description]"
            defaultValue={data?.service.description}
          />
        </Col>
      </Row>

      <FormSubmit>Salvar</FormSubmit>
    </form>
  )
}
