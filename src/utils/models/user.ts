import { $Enums, User } from '@prisma/client'

import { axios } from '@services/axios'
import { UserProps } from '~/Types/UserProps'
import { formDataToJson } from '~/utils/formDataToJson'
import { validateAuthGuard } from '~/utils/validateAuthGuard'

import { CartProps } from '~/Types/Cart'
import { ProductProps } from '~/Types/Product'
import { noEmpty } from '..'
import { DefineUserPasswordFormDataObject } from './validation/schemas/DefineUserPasswordFormDataObjectSchema'

export const createUserByFormData = async (
  formData: FormData
): Promise<UserProps | null> => {
  try {
    const response = await axios.post<UserProps>('/users', formData)

    const createdUser = response.data

    if (response.status === 200) {
      return createdUser
    }
  } catch (err) {}

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

type DefineUserPasswordRequestResponseData = {
  success: boolean
}

export const defineUserPassword = async (
  userId: string,
  formData: FormData | DefineUserPasswordFormDataObject
): Promise<boolean> => {
  formData =
    formData instanceof FormData
      ? formDataToJson<DefineUserPasswordFormDataObject>(formData)
      : formData

  // console.log('[defineUserPassword] formData: ', formData)

  try {
    const response = await axios.patch<DefineUserPasswordRequestResponseData>(
      `/users/${userId}/define-password`,
      formData
    )

    return Boolean(
      typeof response.data === 'object' &&
        response.data &&
        response.data.success
    )
  } catch (err) {
    console.log('Error defining user password => ', err)
    // pass
  }

  return false
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

export const getUsers = async (
  query: string = ''
): Promise<Array<UserProps>> => {
  const response = await axios.get<Array<UserProps>>(
    `/users/${noEmpty(query) ? `?${query}` : ''}`
  )

  if (response.data instanceof Array) {
    return response.data
  }

  return []
}

export const getUserOpenedCarts = (user: UserProps): Array<CartProps> => {
  const openCartStatus: Array<$Enums.CartStatus> = [
    $Enums.CartStatus.PENDING,
    $Enums.CartStatus.PROGRESS
  ]

  return user.carts.filter(cart =>
    Boolean(openCartStatus.includes(cart.status))
  )
}

export const userHasOpenedCarts = (user: UserProps): boolean => {
  return getUserOpenedCarts(user).length >= 1
}

type FavoritesRequestData = {
  products: Array<{
    id: string
  }>
}

export const addUserFavorites = async (
  requestData: FavoritesRequestData
): Promise<Array<ProductProps>> => {
  try {
    const response = await axios.post<Array<ProductProps>>(
      '/users/favorites',
      requestData
    )

    if (response.data instanceof Array) {
      return response.data
    }

    return []
  } catch (err) {
    return []
  }
}

export const removeUserFavorites = async (
  requestData: FavoritesRequestData
): Promise<Array<ProductProps>> => {
  try {
    const response = await axios.delete<Array<ProductProps>>(
      '/users/favorites',
      {
        data: requestData
      }
    )

    if (response.data instanceof Array) {
      return response.data
    }

    return []
  } catch (err) {
    return []
  }
}

export const getFavorites = async (): Promise<Array<ProductProps>> => {
  try {
    const response = await axios.post<Array<ProductProps>>('/users/favorites')

    if (response.data instanceof Array) {
      return response.data
    }

    return []
  } catch (err) {
    return []
  }
}
