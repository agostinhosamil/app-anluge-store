import { Permission, Role } from '@prisma/client'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { CheckButton } from '@components/Form/CheckButton'
import { FormSubmit } from 'dashboard@components/FormSubmit'

type SetRolePermissionFormProps = {
  roleData: Role
  permissions: Array<Permission>
  actionLabel?: string
}

type SetRolePermissionFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & SetRolePermissionFormProps
>

export const SetRolePermissionForm: SetRolePermissionFormComponent = ({
  roleData,
  permissions,
  actionLabel,
  ...props
}) => {
  if (!(permissions instanceof Array) || permissions.length < 1) {
    return (
      <div className="text-center w-100">
        <span>Sem registros para apresentar</span>
      </div>
    )
  }

  return (
    <form
      method="post"
      action={`/api/roles/${roleData.id}/permissions`}
      {...props}
    >
      <Row>
        {permissions.map(permission => (
          <Col key={permission.id} sm={6}>
            <CheckButton name="role[permissions][]" value={permission.id}>
              {permission.name}
            </CheckButton>
          </Col>
        ))}
      </Row>
      <FormSubmit>{actionLabel || 'Continuar'}</FormSubmit>
    </form>
  )
}
