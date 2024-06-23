import { UserProps } from 'Types/UserProps'
import { SignInResponse } from '~/utils/auth/types'

export type AuthenticationWrapperContextAuthObject = {
  user?: UserProps
  token?: string
}

export type RequestSignInHelper = (
  user?: UserProps
) => Promise<SignInResponse | undefined>

export type AuthenticationWrapperContext = {
  auth: AuthenticationWrapperContextAuthObject
  setUser: (user: UserProps) => void
  authenticated: () => boolean

  requestSignIn: RequestSignInHelper
}
