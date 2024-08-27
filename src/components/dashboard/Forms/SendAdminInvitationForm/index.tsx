import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { SelectField } from '@components/Form/SelectField'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { Spinner } from 'react-bootstrap'
import { useRole } from '~/utils/hooks/useRole'
import { Container, Message } from './styles'

type SendAdminInvitationFormProps = object

type SendAdminInvitationFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & SendAdminInvitationFormProps
>

export const SendAdminInvitationForm: SendAdminInvitationFormComponent = ({
  ...props
}) => {
  const { roles, loading } = useRole()

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  return (
    <form method="post" action="/" {...props}>
      <Message>
        Ao enviar este convite, a pessoa receberá um link especial de cadastro
        para criar uma conta de administrador com o cargo que tiveres
        selecionado.
      </Message>
      <Row>
        <Col md={12}>
          <SelectField
            name="user[role]"
            label="Selecionar cargo"
            data={roles.map(role => ({ label: role.name, value: role.id }))}
          />
        </Col>
      </Row>
      <Row>
        <Col md={14}>
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
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormSubmit>Continuar</FormSubmit>
        </Col>
      </Row>
    </form>
  )
}
