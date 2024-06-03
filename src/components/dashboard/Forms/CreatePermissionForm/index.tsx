import { Permission } from '@prisma/client'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import { FormSubmit } from 'dashboard@components/FormSubmit'
import { LongTextField } from '~/components/Form/LongTextField'

type CreatePermissionFormProps = {
  data?: Permission
  actionLabel?: string
}

type CreatePermissionFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreatePermissionFormProps
>

export const CreatePermissionForm: CreatePermissionFormComponent = ({
  data,
  actionLabel,
  ...props
}) => {
  return (
    <form method="post" action="/" {...props}>
      <Row>
        <Col md={6}>
          <FloatingLabel
            controlId="permission-name"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nome"
              autoComplete="off"
              name="permission[name]"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel
            controlId="permission-key"
            label="Key"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Key"
              autoComplete="off"
              name="permission[key]"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <LongTextField
            label="Descrição"
            rows={2}
            name="permission[description]"
          />
        </Col>
      </Row>

      <FormSubmit>{actionLabel || 'Salvar'}</FormSubmit>
    </form>
  )
}
