'use client'

import { Fragment, useState } from 'react'

import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { EntityCard } from 'dashboard@components/EntityCard'
import { CreatePermissionForm } from 'dashboard@components/Forms/CreatePermissionForm'

import { Dialog } from '@components/Dialog'
import { usePermission } from '@utils/hooks/usePermission'
import { createPermissionByFormData } from '~/utils/models/permission'

export default function CategoriesPage() {
  const [showCreatePermissionDialog, setShowCreatePermissionDialog] =
    useState<boolean>(false)

  const { permissions, addPermission } = usePermission()

  const dialogCloseHandler = () => {
    setShowCreatePermissionDialog(false)
  }

  const createPermissionFormSubmitHandler: React.FormEventHandler =
    async event => {
      event.preventDefault()

      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      const createdPermission = await createPermissionByFormData(formData)

      if (!createdPermission) {
        return alert('Não pude criar a permission, verifique os dados')
      }

      addPermission(createdPermission)

      setShowCreatePermissionDialog(false)
    }

  return (
    <Fragment>
      <ContentHeader title="Permissions">
        <ActionButton
          label="Criar permission"
          onClick={() => setShowCreatePermissionDialog(true)}
        />
      </ContentHeader>
      <Dialog
        size="large"
        title="Criar permission"
        onClose={dialogCloseHandler}
        show={showCreatePermissionDialog}
      >
        <CreatePermissionForm
          onSubmit={event => createPermissionFormSubmitHandler(event)}
        />
      </Dialog>

      {permissions && (
        <div style={{ width: '100%' }}>
          {permissions.map(role => (
            <EntityCard
              key={role.id}
              title={role.name}
              subTitle={role.key}
              icons={['Edit', 'Remove']}
            >
              <p>{role.description}</p>
            </EntityCard>
          ))}
        </div>
      )}
    </Fragment>
  )
}
