import { useEffect, useState } from 'react'

import { Role } from '@prisma/client'

import { axios } from '@services/axios'
import { RoleProps } from '~/Types/RoleProps'

export const createRoleByFormData = async (
  formData: FormData
): Promise<RoleProps | null> => {
  const response = await axios.post<RoleProps>('/roles', formData)

  const createdRole = response.data

  if (response.status === 200) {
    return createdRole
  }

  return null
}

export const grantRolePermissionsByFormData = async (
  roleId: number,
  formData: FormData
): Promise<Role | null> => {
  try {
    const response = await axios.post<RoleProps>(
      `/roles/${roleId}/permissions`,
      formData
    )

    const createdRole = response.data

    if (response.status === 200) {
      return createdRole
    }
  } catch (err) {
    // pass
  }

  return null
}

export type UseRoleHookDataObject = {
  roles: Array<RoleProps>
  loading: boolean
  addRole: (role: RoleProps) => void
  removeRole: (roleId: number) => void
  updateRole: (roleId: number, roleData: Partial<RoleProps>) => void
}

export const getRoles = async (): Promise<Array<RoleProps>> => {
  try {
    const response = await axios.get<Array<RoleProps>>('/roles')

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {}

  return []
}

export const useRole = (): UseRoleHookDataObject => {
  const [loading, setLoading] = useState<boolean>(true)
  const [roles, setRoles] = useState<Array<RoleProps>>([])

  useEffect(() => {
    const handleEffect = async () => {
      // const response = await axios.get<Array<RoleProps>>('/roles')

      // if (response.data instanceof Array) {

      // }

      const registeredRoles = await getRoles()

      setRoles(registeredRoles)
      setLoading(false)
    }

    handleEffect()
  }, [])

  return {
    roles,
    loading,

    addRole(role) {
      const currentRoles = roles instanceof Array ? roles : []
      setRoles([...currentRoles, role])
    },

    removeRole(roleId) {
      if (!(roles instanceof Array)) {
        return
      }

      setRoles(roles.filter(role => role.id !== roleId))
    },

    updateRole(roleId, roleData) {
      if (!(roles instanceof Array)) {
        return
      }

      setRoles(
        roles.map(role => {
          if (role.id !== roleId) {
            return role
          }

          return {
            ...role,
            ...roleData
          }
        })
      )
    }
  }
}
