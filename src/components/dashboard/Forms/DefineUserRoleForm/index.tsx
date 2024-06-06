import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SelectField } from '@components/Form/SelectField'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { Spinner } from 'react-bootstrap'
import { UserProps } from 'Types/UserProps'
import { useRole } from '~/utils/hooks/useRole'

type DefineUserRoleFormProps = {
  user: UserProps
}

type DefineUserRoleFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & DefineUserRoleFormProps
>

export const DefineUserRoleForm: DefineUserRoleFormComponent = ({
  user,
  ...props
}) => {
  const { roles, loading } = useRole()

  if (loading) {
    return <Spinner />
  }

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    if (typeof props.onSubmit === 'function') {
      return props.onSubmit(event)
    }
  }

  return (
    <form method="post" action="/" {...props} onSubmit={formSubmitHandler}>
      <Row>
        <Col md={12}>
          <input type="hidden" name="user[id]" defaultValue={user.id} />
          <SelectField
            name="role[id]"
            data={roles.map(role => ({ label: role.name, value: role.id }))}
          />
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
