'use client'

import { Fragment, useRef, useState } from 'react'

import { CardButton, CardButtons } from '@components/CardButtons'
import { Dialog } from '@components/Dialog'
import { Partial } from '@components/Partial'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { EntityCard } from 'dashboard@components/EntityCard'
import { CreateUserForm } from 'dashboard@components/Forms/CreateUserForm'
import { DefineUserRoleForm } from 'dashboard@components/Forms/DefineUserRoleForm'
import { RemoveForm } from 'dashboard@components/Forms/RemoveForm'
import { SendAdminInvitationForm } from 'dashboard@components/Forms/SendAdminInvitationForm'
import { UserSelectList } from 'dashboard@components/UserSelectList'
import { RoleProps } from '~/Types/Role'
import { UserProps } from '~/Types/UserProps'
import { useAdmins } from '~/utils/hooks/useAdmins'
import {
  addOrUpdateAdminByFormData,
  deleteAdminByFormData
} from '~/utils/models/admin'
import { getRoles } from '~/utils/models/role'
import { createAdminUserByFormData } from '~/utils/models/user'

type ScreenWrapperProps = {
  name: string
}

export default function AdminsPage() {
  const [screen, setScreen] = useState<string>('home')
  const [showAddAdminDialog, setShowAddAdminDialog] = useState<boolean>(false)
  const [showCreateUserDialog, setShowCreateUserDialog] =
    useState<boolean>(false)

  const dialogTitleState = useRef<string>()
  const rolesState = useRef<Array<RoleProps>>()
  const selectedUserState = useRef<UserProps>()

  const { loading, admins, updateAdmin, adminExists, addAdmin, deleteAdmin } =
    useAdmins()

  const addAdminDialogCloseHandler = () => {
    setShowAddAdminDialog(false)
    setScreen('home')

    dialogTitleState.current = undefined
  }

  const createUserDialogCloseHandler = () => {
    setShowCreateUserDialog(false)
  }

  const addAdminButtonClickHandler = () => {
    setShowAddAdminDialog(true)
  }

  const createUserCardButtonClickHandler = async () => {
    rolesState.current = await getRoles()

    setShowAddAdminDialog(false)
    setShowCreateUserDialog(true)
  }

  const selectUserCardButtonClickHandler = () => {
    dialogTitleState.current = 'Selecionar utilizador'
    setScreen('select-user')
  }

  const userSelectHandler = (user: UserProps) => {
    dialogTitleState.current = `Definir cargo de ${user.name}`
    selectedUserState.current = user

    setScreen('define-user-role')
  }

  const createUserFormSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const createdUser = await createAdminUserByFormData(formData)

    if (!createdUser) {
      return alert('Could not create user')
    }

    dialogTitleState.current = undefined

    addAdmin(createdUser)

    // deleteAdmin(updatedUser.id)
    // setShowAddAdminDialog(false)

    setShowCreateUserDialog(false)
    setScreen('home')
  }

  const defineUserRoleFormSubmitHandler: React.FormEventHandler =
    async event => {
      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      const updatedUser = await addOrUpdateAdminByFormData(formData)

      if (!updatedUser) {
        return alert('Could not update user')
      }

      dialogTitleState.current = undefined

      if (adminExists(updatedUser.id)) {
        updateAdmin(updatedUser.id, updatedUser)
      } else {
        addAdmin(updatedUser)
      }

      // deleteAdmin(updatedUser.id)

      setShowAddAdminDialog(false)
      setScreen('home')
    }

  const removeAdminFormSubmitHandler: React.FormEventHandler = async event => {
    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const updatedUser = await deleteAdminByFormData(formData)

    if (!updatedUser) {
      return alert('Could not update user')
    }

    dialogTitleState.current = undefined

    deleteAdmin(updatedUser.id)

    setShowAddAdminDialog(false)
    setScreen('home')
  }

  const sendAdminInvitationCardButtonClickHandler = () => {
    dialogTitleState.current = `Enviar convite por email`

    setScreen('send-admin-invitation')
  }

  const ScreenWrapper: React.FunctionComponent<
    React.PropsWithChildren & ScreenWrapperProps
  > = props => {
    if (props.name !== screen) {
      return null
    }

    return props.children
  }

  return (
    <Fragment>
      <ContentHeader title="Administradores">
        <Partial can={'admin:add'}>
          <ActionButton
            label="Adicionar administrador"
            onClick={addAdminButtonClickHandler}
          />
        </Partial>
      </ContentHeader>
      <Dialog
        onClose={addAdminDialogCloseHandler}
        show={showAddAdminDialog}
        size="medium"
        title={dialogTitleState.current || 'Adicionar administrador'}
      >
        <ScreenWrapper name="home">
          <CardButtons>
            <CardButton onClick={selectUserCardButtonClickHandler}>
              Selecionar um utilizador existente
            </CardButton>
            <CardButton onClick={createUserCardButtonClickHandler}>
              Criar novo utilizador
            </CardButton>
            <CardButton onClick={sendAdminInvitationCardButtonClickHandler}>
              Enviar convite por email
            </CardButton>
          </CardButtons>
        </ScreenWrapper>

        <ScreenWrapper name="select-user">
          <UserSelectList onSelect={userSelectHandler} />
        </ScreenWrapper>

        <ScreenWrapper name="define-user-role">
          {selectedUserState.current && (
            <DefineUserRoleForm
              onSubmit={defineUserRoleFormSubmitHandler}
              user={selectedUserState.current}
            />
          )}
        </ScreenWrapper>

        <ScreenWrapper name="send-admin-invitation">
          <SendAdminInvitationForm />
        </ScreenWrapper>

        <ScreenWrapper name="remove-user-role">
          <RemoveForm onSubmit={removeAdminFormSubmitHandler}>
            <h5>Tem certeza?</h5>
            <input
              type="hidden"
              defaultValue={selectedUserState.current?.id}
              name="user[id]"
            />
            <p>
              <b>{selectedUserState.current?.name}</b> será absolvido das suas
              responsabilidades dentro da plataforma.
            </p>
          </RemoveForm>
        </ScreenWrapper>
      </Dialog>
      {loading && <h2>loading...</h2>}

      <div>
        {admins.map(user => (
          <EntityCard
            key={user.id}
            title={user.name}
            entity="admin"
            avatar="/assets/images/uploads/user-avatar.jpg"
            icons={['Edit', 'Remove']}
            subTitle={[
              user.role.name,
              (user.username && `@${user.username}`) || user.email
            ]}
            onEdit={() => {
              dialogTitleState.current = `Definir cargo de ${user.name}`
              selectedUserState.current = user

              setScreen('define-user-role')
              setShowAddAdminDialog(true)
            }}
            onRemove={() => {
              dialogTitleState.current = `Remover ${user.name} como um dos administradores`
              selectedUserState.current = user

              setScreen('remove-user-role')
              setShowAddAdminDialog(true)
            }}
          />
        ))}
      </div>

      <Dialog
        size="large"
        show={showCreateUserDialog}
        onClose={createUserDialogCloseHandler}
        title="Registar utilizador como administrador"
      >
        <CreateUserForm
          registeredRoles={rolesState.current}
          onSubmit={event => createUserFormSubmitHandler(event)}
        />
      </Dialog>
    </Fragment>
  )
}
