import { createContext, useContext, useState } from 'react'
// import { UserProps } from '~/Types/UserProps'
import { UserProps } from '~/Types/UserProps'
import {
  AuthenticationWrapperContext,
  AuthenticationWrapperContextAuthObject
} from './types'

export const authenticationWrapperContext = createContext(
  {} as AuthenticationWrapperContext
)

type AuthenticationWrapperContextProviderProps = {
  auth: AuthenticationWrapperContextAuthObject
}

type AuthenticationWrapperContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & AuthenticationWrapperContextProviderProps
>

export const AuthenticationWrapperContextProvider: AuthenticationWrapperContextProviderComponent =
  props => {
    const [user, setUser] = useState<UserProps | undefined>(props.auth.user)

    const authenticationWrapperContextData: AuthenticationWrapperContext = {
      auth: {
        ...(props.auth || {}),
        user
      },

      setUser(user) {
        setUser(user)
      }
    }

    return (
      <authenticationWrapperContext.Provider
        value={authenticationWrapperContextData}
      >
        {props.children}
      </authenticationWrapperContext.Provider>
    )
  }

export const useAuthenticationContext = () =>
  useContext(authenticationWrapperContext)
