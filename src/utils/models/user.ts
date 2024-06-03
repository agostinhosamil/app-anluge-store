import { User } from '@prisma/client'

import { axios } from '@services/axios'
import { UserProps } from '~/Types/UserProps'
import { validateAuthGuard } from '../validateAuthGuard'

export const createUserByFormData = async (
  formData: FormData
): Promise<UserProps | null> => {
  const response = await axios.post<UserProps>('/users', formData)

  const createdUser = response.data

  if (response.status === 200) {
    return createdUser
  }

  return null
}

export const createAdminUserByFormData = async (
  formData: FormData
): Promise<UserProps | null> => {
  const response = await axios.post<UserProps>('/users/admins/new', formData)

  const createdUser = response.data

  if (response.status === 200) {
    return createdUser
  }

  return null
}

export const updateUserByFormData = async (
  userId: string,
  formData: FormData
): Promise<User | null> => {
  const response = await axios.patch<User>(`/users/${userId}`, formData)

  const createdUser = response.data

  if (response.status === 200) {
    return createdUser
  }

  return null
}

export const deleteUserById = async (userId: string): Promise<boolean> => {
  const response = await axios.delete(`/users/${userId}`)

  if (response.data && response.data.success) {
    return true
  }

  return false
}

export const deleteUser = async (user: UserProps): Promise<boolean> => {
  return await deleteUserById(user.id)
}

export const userCan = (
  user: UserProps,
  permissionKey: string | Array<string>
): boolean => {
  return validateAuthGuard('can', permissionKey, user)
}

export const userIs = (
  user: UserProps,
  roleKey: string | Array<string>
): boolean => validateAuthGuard('is', roleKey, user)

export const getUsers = async (): Promise<Array<UserProps>> => {
  const response = await axios.get<Array<UserProps>>('/users')

  if (response.data instanceof Array) {
    return response.data
  }

  return []
}
