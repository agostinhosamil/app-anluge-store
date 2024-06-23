import { SignInRequestProps, SignInResponse } from './types'

import { axios } from '@services/axios'

export const signIn = async (credentials: SignInRequestProps) => {
  try {
    const response = await axios.post<SignInResponse>(
      '/users/auth',
      credentials
    )

    if (response.status === 200 && response.data.user) {
      return response.data
    }
  } catch (err) {
    return
  }
}

export const signInById = async (userId: string) => {
  try {
    const response = await axios.post<SignInResponse>(`/users/auth/${userId}`)

    if (response.status === 200 && response.data.user) {
      return response.data
    }
  } catch (err) {
    // pass
  }
}

export const handleSignInFormSubmit = async (
  formData: FormData
): Promise<SignInResponse | undefined> => {
  const userInputUserNamer = formData.get('user[username]')
  const userInputPassword = formData.get('user[password]')

  try {
    const signInResponse = await signIn({
      password: String(userInputPassword),
      username: String(userInputUserNamer)
    })

    if (signInResponse) {
      return signInResponse
    }
  } catch (err) {
    // console.log('Error => ', err)
  }
}
