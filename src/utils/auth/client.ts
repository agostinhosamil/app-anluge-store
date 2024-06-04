import { SignInRequestProps, SignInResponse } from './types'

import { axios } from '@services/axios'

export const signIn = async (credentials: SignInRequestProps) => {
  const response = await axios.post<SignInResponse>('/users/auth', credentials)

  if (response.status === 200 && response.data.user) {
    return response.data
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
