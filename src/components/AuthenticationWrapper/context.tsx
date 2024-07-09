import { createContext, useContext, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { default as Col } from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// import { UserProps } from '~/Types/UserProps'
import { Dialog } from '@components/Dialog'
import { UserProps } from '~/Types/UserProps'

import deepmerge from 'deepmerge'
import { resolveUserAvatarUrl } from '~/utils'
import { signIn } from '~/utils/auth/client'
import { formDataToJson } from '~/utils/formDataToJson'
import { FormSubmit } from '../dashboard/FormSubmit'
import { LoadingScreen } from '../styled'
import {
  LoginDialogUserAvatar,
  LoginDialogUserAvatarWrapper,
  LoginDialogUserData,
  LoginDialogUserDataContainer
} from './styles'
import {
  AuthenticationWrapperContext,
  AuthenticationWrapperContextAuthObject,
  RequestSignInHelper
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

type LoadingState = 'LOGIN' | undefined

export const AuthenticationWrapperContextProvider: AuthenticationWrapperContextProviderComponent =
  props => {
    const [loading, setLoading] = useState<LoadingState>()
    const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false)
    const [user, setUser] = useState<UserProps | undefined>(props.auth.user)

    const loginDataState = useRef<UserProps | null>()
    const loginFormSubmitHandlerState = useRef<React.FormEventHandler>()
    const loginFormCancelHandlerState = useRef<() => void>()

    const requestSignIn: RequestSignInHelper = async user => {
      loginDataState.current = user

      setShowLoginDialog(true)

      return new Promise(resolve => {
        loginFormSubmitHandlerState.current = async event => {
          const formElement = event.target as HTMLFormElement
          const formData = new FormData(formElement)
          const jsonFormData = formDataToJson(formData)

          const { user: userData } = deepmerge(
            (user && { user }) || {},
            jsonFormData
          )

          const signInResponse = await signIn({
            password: userData.password,
            username: String(userData.email || userData.username)
          })

          setLoading(undefined)

          if (signInResponse) {
            return resolve(signInResponse)
          }

          alert('Incorrect user or password')
        }

        loginFormCancelHandlerState.current = () => {
          resolve(undefined)
        }
      })
    }

    const authenticationWrapperContextData: AuthenticationWrapperContext = {
      requestSignIn,

      auth: {
        ...(props.auth || {}),
        user
      },

      setUser(user) {
        setUser(user)
      },

      authenticated() {
        return Boolean(user)
      }
    }

    const loginDialogCloseHandler = () => {
      setShowLoginDialog(false)

      if (typeof loginFormCancelHandlerState.current === 'function') {
        loginFormCancelHandlerState.current()
      }
    }

    const loginFormSubmitHandler: React.FormEventHandler = event => {
      event.preventDefault()

      setLoading('LOGIN')

      if (typeof loginFormSubmitHandlerState.current === 'function') {
        return loginFormSubmitHandlerState.current(event)
      }
    }

    return (
      <authenticationWrapperContext.Provider
        value={authenticationWrapperContextData}
      >
        {props.children}
        <Dialog
          show={showLoginDialog}
          title="Iniciar sessão"
          size="large"
          onClose={loginDialogCloseHandler}
        >
          <form
            method="post"
            // action="/api/users/{id}/define-password"
            onSubmit={loginFormSubmitHandler}
          >
            {loading === 'LOGIN' && (
              <LoadingScreen>
                <i>
                  <Spinner />
                </i>
                <span>A iniciar sessão...</span>
              </LoadingScreen>
            )}
            <Row>
              {loginDataState.current && (
                <LoginDialogUserDataContainer>
                  <LoginDialogUserAvatarWrapper>
                    <LoginDialogUserAvatar
                      alt={'Mia Khalifa'}
                      src={resolveUserAvatarUrl(loginDataState.current.image)}
                      width={80}
                      height={80}
                    />
                  </LoginDialogUserAvatarWrapper>
                  <LoginDialogUserData>
                    <span>A iniciar sessão como:</span>
                    <h5>{loginDataState.current.name}</h5>
                    <h6>{loginDataState.current.email}</h6>
                  </LoginDialogUserData>
                </LoginDialogUserDataContainer>
              )}
              {!loginDataState.current && (
                <Col md={6}>
                  <FloatingLabel
                    controlId="user-username"
                    label="Email ou telefone"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Email ou telefone"
                      autoComplete="off"
                      name="user[username]"
                    />
                  </FloatingLabel>
                </Col>
              )}
              <Col md={loginDataState.current ? 12 : 6}>
                <FloatingLabel
                  controlId="user-password"
                  label="Palavra passe"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Palavra passe"
                    autoComplete="off"
                    name="user[password]"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormSubmit loading={loading === 'LOGIN'}>
                  Iniciar sessão
                </FormSubmit>
              </Col>
            </Row>
          </form>
        </Dialog>
      </authenticationWrapperContext.Provider>
    )
  }

export const useAuthenticationContext = () =>
  useContext(authenticationWrapperContext)
