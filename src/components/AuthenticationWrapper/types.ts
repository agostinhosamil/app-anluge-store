import { UserProps } from 'Types/UserProps'

export type AuthenticationWrapperContextAuthObject = {
  user?: UserProps
  token?: string
}

export type AuthenticationWrapperContext = {
  auth: AuthenticationWrapperContextAuthObject
  setUser: (user: UserProps) => void
}
