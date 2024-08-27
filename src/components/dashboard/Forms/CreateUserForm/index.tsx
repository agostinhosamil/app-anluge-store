import { User } from '@prisma/client'
import { Fragment } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import { FormSubmit } from 'dashboard@components/FormSubmit'
import { RoleProps } from 'Types/Role'
import { SelectField } from '~/components/Form/SelectField'
import { Partial } from '~/components/Partial'

type CreateUserFormProps = {
  data?: User
  actionLabel?: string
  registeredRoles?: Array<RoleProps>
  dataAction?: 'edit' | 'create'
}

type CreateUserFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreateUserFormProps
>

export const CreateUserForm: CreateUserFormComponent = ({
  data,
  actionLabel,
  dataAction,
  registeredRoles,
  ...props
}) => {
  const isEditingUser = Boolean(
    dataAction === 'edit' || (data && typeof data === 'object')
  )

  const PartialWrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children
  }) => {
    return <Partial can="user:edit:password">{children}</Partial>
  }

  const PassWordFieldsWrapper = isEditingUser ? PartialWrapper : Fragment

  return (
    <form method="post" action="/" {...props}>
      <Row>
        <Col md={12}>
          <FloatingLabel
            controlId="user-name"
            label="Nome completo"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Nome completo"
              autoComplete="off"
              name="user[name]"
              defaultValue={(data && data.name) || undefined}
            />
          </FloatingLabel>
        </Col>
      </Row>

      {registeredRoles instanceof Array && registeredRoles.length >= 1 && (
        <Partial is={'admin:master'}>
          <SelectField
            name="user[role]"
            label="Selecionar cargo"
            data={registeredRoles.map(role => ({
              label: role.name,
              value: role.id
            }))}
          />
        </Partial>
      )}

      <Row>
        <Col md={8}>
          <FloatingLabel
            controlId="user-email"
            label="Endereço de email"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Endereço de email"
              autoComplete="off"
              name="user[email]"
              defaultValue={(data && data.email) || undefined}
            />
          </FloatingLabel>
        </Col>
        <Col md={4}>
          <FloatingLabel
            controlId="user-phone"
            label="Número de telefone"
            className="mb-3 bootstrap-floating-label"
          >
            <Form.Control
              type="text"
              placeholder="Número de telefone"
              autoComplete="off"
              name="user[phone]"
              defaultValue={(data && data.phone) || undefined}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <PassWordFieldsWrapper>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="user-password"
              label="Palavra passe"
              className="mb-3 bootstrap-floating-label"
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
              label="Repita a palavra passe"
              className="mb-3 bootstrap-floating-label"
            >
              <Form.Control
                type="text"
                placeholder="Repita a palavra passe"
                autoComplete="off"
                name="user[password-confirmation]"
              />
            </FloatingLabel>
          </Col>
        </Row>
      </PassWordFieldsWrapper>

      <FormSubmit>{actionLabel || 'Continuar'}</FormSubmit>
    </form>
  )
}
