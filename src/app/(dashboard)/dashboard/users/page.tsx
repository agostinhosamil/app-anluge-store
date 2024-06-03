'use client'

import { Fragment, useState } from 'react'

import { Dialog } from '@components/Dialog'
import { Partial } from '@components/Partial'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { EntityCard } from 'dashboard@components/EntityCard'
import { CreateUserForm } from 'dashboard@components/Forms/CreateUserForm'
import { RemoveForm } from 'dashboard@components/Forms/RemoveForm'

import { UserProps } from '~/Types/UserProps'
import { noEmpty } from '~/utils'
import { useUser } from '~/utils/hooks/useUser'
import {
  createUserByFormData,
  deleteUserById,
  updateUserByFormData
} from '~/utils/models/user'

export default function UsersPage() {
  const [userToEdit, setUserToEdit] = useState<UserProps>()
  const [userToRemove, setUserToRemove] = useState<UserProps>()
  const [showCreateUserDialog, setShowCreateUserDialog] = useState(false)

  const { users, addUser, updateUser, deleteUser } = useUser()

  const createUserButtonClickHandler = () => setShowCreateUserDialog(true)

  const createUserDialogCloseHandler = () => setShowCreateUserDialog(false)

  const editUserDialogCloseHandler = () => {
    setUserToEdit(undefined)
  }

  const removeUserDialogCloseHandler = () => {
    setUserToRemove(undefined)
  }

  const createUserFormSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const createdUser = await createUserByFormData(formData)

    if (!createdUser) {
      return alert('Could not create user')
    }

    addUser(createdUser)
    setShowCreateUserDialog(false)
  }

  const editUserFormSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    if (!userToEdit) {
      return
    }

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const updatingUserPassword = noEmpty(formData.get('user[password]'))

    if (!updatingUserPassword) {
      formData.delete('user[password]')
    }

    const updatedUser = await updateUserByFormData(userToEdit.id, formData)

    if (!updatedUser) {
      return alert('Could not update user')
    }

    updateUser(userToEdit.id, updatedUser)
    setUserToEdit(undefined)
  }

  const removeUserFormSubmitHandler: React.FormEventHandler = async () => {
    if (!userToRemove) {
      return
    }

    const removedUser = await deleteUserById(userToRemove.id)

    if (!removedUser) {
      return alert('Could not remove user')
    }

    deleteUser(userToRemove.id)
    setUserToRemove(undefined)
  }

  return (
    <Fragment>
      <ContentHeader title="Contas de utilizador">
        <Partial can={'user:create'}>
          <ActionButton
            label="Registar novo utilizador"
            onClick={createUserButtonClickHandler}
          />
        </Partial>
      </ContentHeader>
      <div>
        {users.map(user => (
          <EntityCard
            key={user.id}
            title={user.name}
            entity="user"
            avatar="/assets/images/uploads/user-avatar.jpg"
            icons={['Edit', 'Remove', 'Options']}
            subTitle={[
              user.role.name,
              (user.username && `@${user.username}`) || user.email
            ]}
            onEdit={() => setUserToEdit(user)}
            onRemove={() => setUserToRemove(user)}
            options={[
              {
                icon: 'FaUserShield',
                label: 'Atribuir cargo',
                can: 'user:edit:role',
                onClick: () => {
                  alert('Atribuir um cargo a este utilizador')
                }
              },
              {
                icon: 'FaUserLock',
                label: 'Bloquear utilizador',
                can: 'user:block',
                onClick: () => {
                  alert('Bloquear este utilizador')
                }
              },
              {
                icon: 'FaKey',
                label: 'Alterar palavra passe',
                can: 'user:edit:password',
                onClick: () => {
                  alert('Alterar palavra passe deste utilizador')
                }
              },
              {
                icon: 'FaUserCheck',
                label: 'Verificar utilizador',
                can: 'user:verify',
                href: '/users/verify'
              }
            ]}
          />
        ))}
      </div>

      <Dialog
        size="large"
        show={showCreateUserDialog}
        onClose={createUserDialogCloseHandler}
        title="Registar utilizador"
      >
        <CreateUserForm
          onSubmit={event => createUserFormSubmitHandler(event)}
        />
      </Dialog>

      {userToEdit && (
        <Dialog
          size="large"
          show={true}
          onClose={editUserDialogCloseHandler}
          title="Editar utilizador"
        >
          <CreateUserForm
            data={userToEdit}
            onSubmit={event => editUserFormSubmitHandler(event)}
          />
        </Dialog>
      )}

      {userToRemove && (
        <Dialog
          size="medium"
          show={true}
          onClose={removeUserDialogCloseHandler}
          title="Remover utilizador"
        >
          <RemoveForm onSubmit={removeUserFormSubmitHandler}>
            <h5>Tem certeza?</h5>
            <p>
              O registro de <b>{userToRemove.name}</b> será permanentemente
              eliminado do sistema, e não mais poderá ter acesso.
            </p>
            <p>Esta ação não pode ser revertida de forma alguma.</p>
          </RemoveForm>
        </Dialog>
      )}
    </Fragment>
  )
}
