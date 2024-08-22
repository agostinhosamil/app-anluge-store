'use client'

import { useRef, useState } from 'react'

import { Dialog } from '@components/Dialog'

import { noEmpty } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'

import { AlertDialogProps } from './components/alert'
import { AlertBody } from './components/alert/AlertBody'
import { FormWrapper } from './components/FormWrapper'
import { LoadingDialogIcon, LoadingStateIcon } from './components/loading'
import { ApplicationContext } from './context'
import { AlertResponse, ApplicationContextProps } from './types'
import { appOriginValueFallback } from './utils'

export * from './context'
export * from './hook'
export * from './types'

type ApplicationContextProviderProps = {
  headers: {
    [key: string]: string
  }
}

type ApplicationContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & ApplicationContextProviderProps
>

type FormDialogSubmitHandler = (event: SubmitEvent) => void
type AlertDialogCloseHandler = (alertResponse: string) => void

type LoadingState = LoadingStateIcon

export type LoadingDialogState = {
  show: boolean
  state: LoadingState
  label: string
}

const DEFAULT_LOADING_DIALOG_STATE: LoadingDialogState = {
  show: false,
  state: 'loading',
  label: 'A carregar...'
}

const LOADING_DIALOG_TIMEOUT_ON_RESOLVE = 2000 // 2s

export const ApplicationContextProvider: ApplicationContextProviderComponent =
  props => {
    const [showFormDialog, setShowFormDialog] = useState<boolean>(false)
    const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false)
    const [loadingDialogState, setLoadingDialogState] =
      useState<LoadingDialogState>(DEFAULT_LOADING_DIALOG_STATE)
    const [FormDialogContent, setFormDialogContent] =
      useState<React.ElementType>()

    const alertDialogPropsState = useRef<AlertDialogProps>()
    const formDialogCloseHandlerState = useRef<() => void>()
    const alertDialogCloseHandlerState = useRef<AlertDialogCloseHandler>()
    const formDialogSubmitHandlerState = useRef<FormDialogSubmitHandler>()

    const updateLoadingState = (loadingState: Partial<LoadingDialogState>) => {
      setLoadingDialogState(loadingDialogState => ({
        ...loadingDialogState,
        ...loadingState
      }))
    }

    const reopenLastFormDialog = () => {
      setShowFormDialog(true)
    }

    const closeFormDialog = () => {
      setShowFormDialog(false)
    }

    const applicationContextData: ApplicationContextProps = {
      origin: props.headers['x-app-origin'] || appOriginValueFallback(),

      alert(...args) {
        const alertArguments = args.length >= 2 ? args : [null, ...args]

        const [alertTitle, alertMessage, alertOptions] = alertArguments

        const options =
          alertOptions && typeof alertOptions === 'object' ? alertOptions : {}

        alertDialogPropsState.current = {
          options,
          title: noEmpty(alertTitle) ? alertTitle : null,
          message: String(alertMessage)
        }

        setShowAlertDialog(true)

        return new Promise(resolve => {
          alertDialogCloseHandlerState.current = response => {
            resolve(response as AlertResponse)
          }
        })
      },

      openFormDialog: (formDataObjectSchema, formElement) => {
        // const formDataObjectSchema =
        //   args[0] instanceof z.ZodObject ? args[0] : null
        // const formElement = args[-1 + args.length]

        if (typeof formElement !== 'function') {
          throw new Error('form element must be a valid react component')
        }

        setShowFormDialog(true)

        // console.log('formElement => ', formElement)

        setFormDialogContent(() => formElement)

        return new Promise(resolve => {
          const defaultResponseData = {
            reopen: reopenLastFormDialog,
            close: closeFormDialog
          }

          formDialogCloseHandlerState.current = () => {
            resolve({
              ...defaultResponseData,
              error: true,
              success: false,
              data: null
            })
          }

          formDialogSubmitHandlerState.current = async event => {
            const formElement = event.target as HTMLFormElement
            const formData = new FormData(formElement)
            const jsonFormData = formDataToJson(formData)

            const validatedFormData =
              await formDataObjectSchema.safeParseAsync(jsonFormData)

            if (validatedFormData.success) {
              setShowFormDialog(false)
              // setFormDialogContent(undefined)
              resolve({
                ...defaultResponseData,
                error: false,
                success: true,
                data: validatedFormData.data
              })
            }
          }
        })
      },

      awaits(handler) {
        updateLoadingState({
          show: true
        })

        return new Promise(resolve => {
          const promiseHandler = async () => {
            try {
              const data = await handler()

              updateLoadingState({
                state: 'complete',
                label: 'Êxito!'
              })

              setTimeout(() => {
                updateLoadingState(DEFAULT_LOADING_DIALOG_STATE)

                resolve(data)
              }, LOADING_DIALOG_TIMEOUT_ON_RESOLVE)
            } catch (err) {
              updateLoadingState({
                state: 'error',
                label: 'Algo correu mal'
              })

              setTimeout(() => {
                updateLoadingState(DEFAULT_LOADING_DIALOG_STATE)

                resolve(null)
              }, LOADING_DIALOG_TIMEOUT_ON_RESOLVE)
            }
          }

          promiseHandler()
        })
      }
    }

    const formDialogCloseHandler = () => {
      setShowFormDialog(false)

      if (typeof formDialogCloseHandlerState.current === 'function') {
        formDialogCloseHandlerState.current()
      }
    }

    const alertDialogCloseHandler = () => {
      setShowAlertDialog(false)
    }

    const formDialogSubmitHandler = (event: SubmitEvent) => {
      if (typeof formDialogSubmitHandlerState.current === 'function') {
        formDialogSubmitHandlerState.current(event)
      }
    }

    const closeAlertDialog = (alertResponse: string) => {
      setShowAlertDialog(false)

      if (typeof alertDialogCloseHandlerState.current === 'function') {
        alertDialogCloseHandlerState.current(alertResponse)
      }
    }

    return (
      <ApplicationContext.Provider value={applicationContextData}>
        {props.children}
        <Dialog
          size="x-large"
          show={showFormDialog}
          onClose={formDialogCloseHandler}
        >
          <FormWrapper onSubmit={formDialogSubmitHandler}>
            {FormDialogContent && <FormDialogContent />}
          </FormWrapper>
        </Dialog>
        <Dialog
          showButton={false}
          show={showAlertDialog}
          size="medium"
          onClose={alertDialogCloseHandler}
        >
          {alertDialogPropsState.current && (
            <AlertBody
              {...alertDialogPropsState.current}
              closeDialog={closeAlertDialog}
            />
          )}
        </Dialog>
        <Dialog show={loadingDialogState.show} showButton={false} size="small">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <LoadingDialogIcon name={loadingDialogState.state} />
            <span className="text-2xl font-extralight text-zinc-800">
              {loadingDialogState.label}
            </span>
          </div>
        </Dialog>
      </ApplicationContext.Provider>
    )
  }
