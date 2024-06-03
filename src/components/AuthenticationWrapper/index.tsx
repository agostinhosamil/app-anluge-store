'use client'

import { SignInResponse } from '~/utils/auth/types'

import { AuthenticationWrapperContextProvider } from './context'

// import { SessionProvider } from 'next-auth/react'

type AuthenticationWrapperProps = {
  auth?: SignInResponse
}

type AuthenticationWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren & AuthenticationWrapperProps
>

export { useAuthenticationContext } from './context'

export const AuthenticationWrapper: AuthenticationWrapperComponent = props => {
  const authData = props.auth || {}

  return (
    <AuthenticationWrapperContextProvider auth={authData}>
      {props.children}
    </AuthenticationWrapperContextProvider>
  )
}
