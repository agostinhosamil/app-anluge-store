import { Permission, Role } from '@prisma/client'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import { FormGroup } from '@components/Form/FormGroup'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { CheckButton } from '~/components/Form/CheckButton'
import { LongTextField } from '~/components/Form/LongTextField'

type CreateRoleFormProps = {
  data?: Role
  permissions?: Array<Permission>
  actionLabel?: string
}

type CreateRoleFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreateRoleFormProps
>

export const CreateRoleForm: CreateRoleFormComponent = ({
  data,
  actionLabel,
  ...props
}) => {
  const permissions =
    props.permissions instanceof Array ? props.permissions : []

  return (
    <form method="post" action="/" {...props}>
      <Row>
        <Col md={6}>
          <FloatingLabel controlId="role-name" label="Nome" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nome"
              autoComplete="off"
              name="role[name]"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="role-key" label="Key" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Key"
              autoComplete="off"
              name="role[key]"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <LongTextField label="Descrição" rows={2} name="role[description]" />
        </Col>
      </Row>

      {permissions.length >= 1 && (
        <Row>
          <Col md={12}>
            <FormGroup
              title="Permissões"
              subtitle="Selecionar as permissões para esta role"
              footer="Isto pode ser editado depois"
            >
              <Row>
                {/* <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col>
                <Col md={6}>
                  <CheckButton>Fazer isso</CheckButton>
                </Col> */}
                {permissions.map(permission => (
                  <Col md={6} key={permission.id}>
                    <CheckButton
                      name={`role[permissions][]`}
                      value={permission.id}
                    >
                      {permission.name}
                    </CheckButton>
                  </Col>
                ))}
              </Row>
            </FormGroup>
          </Col>
        </Row>
      )}

      <FormSubmit>{actionLabel || 'Salvar'}</FormSubmit>
    </form>
  )
}
