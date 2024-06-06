import { axios } from '@services/axios'
import { PermissionProps } from '~/Types/Permission'
import { RoleProps } from '~/Types/Role'

export const createPermissionByFormData = async (
  formData: FormData
): Promise<PermissionProps | null> => {
  const response = await axios.post<PermissionProps>('/permissions', formData)

  const createdPermission = response.data

  if (response.status === 200) {
    return createdPermission
  }

  return null
}

export const getPermissions = async (): Promise<Array<PermissionProps>> => {
  try {
    const response = await axios.get<Array<PermissionProps>>('/permissions')

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {}

  return []
}

export const permissionGratedToRole = (
  role: RoleProps,
  permission: PermissionProps
): boolean => {
  if (!(permission.roles instanceof Array)) {
    return false
  }

  const foundPermission = permission.roles.find(({ id }) => id === role.id)

  return Boolean(foundPermission)
}
