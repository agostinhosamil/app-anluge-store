import { axios } from '@services/axios'

import { UserProps } from 'Types/UserProps'

export const addOrUpdateAdminByFormData = async (
  formData: FormData
): Promise<UserProps | undefined> => {
  const response = await axios.post<UserProps>('/users/admins', formData)

  if (response.data && response.data.id) {
    return response.data
  }
}

export const deleteAdminByFormData = async (
  formData: FormData
): Promise<UserProps | undefined> => {
  const response = await axios.patch<UserProps>('/users/admins', formData)

  if (response.data && response.data.id) {
    return response.data
  }
}

export const getAdmins = async (): Promise<Array<UserProps>> => {
  const response = await axios.get<Array<UserProps>>('/users/admins')

  if (response.data instanceof Array) {
    return response.data
  }

  return []
}
