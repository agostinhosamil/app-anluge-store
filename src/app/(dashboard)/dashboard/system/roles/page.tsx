'use client'

import { Permission, Role } from '@prisma/client'
import { Fragment, useRef, useState } from 'react'

import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { EntityCard } from 'dashboard@components/EntityCard'
import { CreateRoleForm } from 'dashboard@components/Forms/CreateRoleForm'
import { SetRolePermissionForm } from 'dashboard@components/Forms/SetRolePermissionsForm'

import { Dialog } from '@components/Dialog'
import {
  getPermissions,
  permissionGratedToRole
} from '@utils/models/permission'

import { RoleProps } from '~/Types/RoleProps'
import {
  createRoleByFormData,
  grantRolePermissionsByFormData,
  useRole
} from '~/utils/models/role'

export default function RolesPage() {
  const [showCreateRoleDialog, setShowCreateRoleDialog] =
    useState<boolean>(false)

  const [roleToSetPermissions, setRoleToSetPermission] = useState<Role>()

  const permissionsState = useRef<Array<Permission>>([])

  const { roles, addRole } = useRole()

  const dialogCloseHandler = () => {
    setShowCreateRoleDialog(false)
  }

  const setRolePermissionsDialogCloseHandler = () => {
    setRoleToSetPermission(undefined)
  }

  const createRoleButtonClickHandler = async () => {
    permissionsState.current = await getPermissions()

    setShowCreateRoleDialog(true)
  }

  const createRoleFormSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const createdRole = await createRoleByFormData(formData)

    if (!createdRole) {
      return alert('Não pude criar a role, verifique os dados')
    }

    addRole(createdRole)

    setShowCreateRoleDialog(false)
  }

  const setRolePermissions = async (role: RoleProps): Promise<void> => {
    const permissions = await getPermissions()

    permissionsState.current = permissions.filter(permission => {
      return !permissionGratedToRole(role, permission)
    })

    setRoleToSetPermission(role)
  }

  const setRolePermissionsFormSubmitHandler: React.FormEventHandler =
    async event => {
      event.preventDefault()

      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      if (roleToSetPermissions) {
        const updatedRole = await grantRolePermissionsByFormData(
          roleToSetPermissions.id,
          formData
        )

        if (!updatedRole) {
          alert('Could not update role')

          return
        }

        setRoleToSetPermission(undefined)
        // updateRole(roleToSetPermissions.id, {})
      }
    }

  return (
    <Fragment>
      <ContentHeader title="Roles">
        <ActionButton
          label="Criar role"
          onClick={() => createRoleButtonClickHandler()}
        />
      </ContentHeader>
      <Dialog
        size="large"
        title="Criar role"
        onClose={dialogCloseHandler}
        show={showCreateRoleDialog}
      >
        <CreateRoleForm
          permissions={permissionsState.current}
          onSubmit={event => createRoleFormSubmitHandler(event)}
        />
      </Dialog>

      <Dialog
        size="medium"
        title={`Atribuir permissões para a role${roleToSetPermissions && ` ${roleToSetPermissions.name}`}`}
        onClose={setRolePermissionsDialogCloseHandler}
        show={!!roleToSetPermissions}
      >
        {roleToSetPermissions && (
          <SetRolePermissionForm
            roleData={roleToSetPermissions}
            permissions={permissionsState.current}
            onSubmit={setRolePermissionsFormSubmitHandler}
          />
        )}
      </Dialog>

      {roles && (
        <div style={{ width: '100%' }}>
          {roles.map(role => (
            <EntityCard
              key={role.id}
              title={role.name}
              subTitle={role.key}
              icons={['Edit', 'Remove', 'Options']}
              options={[
                {
                  label: 'Atribuir permissões',
                  icon: 'FaSuperpowers',
                  onClick: () => {
                    setRolePermissions(role)
                  }
                }
              ]}
            >
              <p>{role.description}</p>
            </EntityCard>
          ))}
        </div>
      )}
    </Fragment>
  )
}
