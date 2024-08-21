'use client'

import { useRef, useState } from 'react'

import { Dialog } from '@components/Dialog'

import { formDataToJson } from '~/utils/formDataToJson'
import { FormWrapper } from './components/FormWrapper'
import { ApplicationContext } from './context'
import { ApplicationContextProps } from './types'
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

export const ApplicationContextProvider: ApplicationContextProviderComponent =
  props => {
    const [showFormDialog, setShowFormDialog] = useState<boolean>(false)
    const [FormDialogContent, setFormDialogContent] =
      useState<React.ElementType>()

    const formDialogSubmitHandlerState = useRef<FormDialogSubmitHandler>()
    const formDialogCloseHandlerState = useRef<any>()

    const reopenLastFormDialog = () => {
      setShowFormDialog(true)
    }

    const closeFormDialog = () => {
      setShowFormDialog(false)
    }

    const applicationContextData: ApplicationContextProps = {
      origin: props.headers['x-app-origin'] || appOriginValueFallback(),

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
      }
    }

    const formDialogCloseHandler = () => {
      setShowFormDialog(false)

      if (typeof formDialogCloseHandlerState.current === 'function') {
        formDialogCloseHandlerState.current()
      }
    }

    const formDialogSubmitHandler = (event: SubmitEvent) => {
      if (typeof formDialogSubmitHandlerState.current === 'function') {
        formDialogSubmitHandlerState.current(event)
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
      </ApplicationContext.Provider>
    )
  }
