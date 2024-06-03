import { SignInRequestProps, SignInResponse } from './types'

import { axios } from '@services/axios'

export const signIn = async (credentials: SignInRequestProps) => {
  const response = await axios.post<SignInResponse>('/users/auth', credentials)

  if (response.status === 200 && response.data.user) {
    return response.data
  }
}
