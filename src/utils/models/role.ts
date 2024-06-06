import { Role } from '@prisma/client'

import { axios } from '@services/axios'
import { RoleProps } from '~/Types/Role'

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

export const getRoles = async (): Promise<Array<RoleProps>> => {
  try {
    const response = await axios.get<Array<RoleProps>>('/roles')

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {}

  return []
}

export const loadDefaultRoles = async (): Promise<Array<RoleProps>> => {
  try {
    const response = await axios.post<Array<RoleProps>>(
      '/roles/load-default-roles'
    )

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {}

  return []
}
