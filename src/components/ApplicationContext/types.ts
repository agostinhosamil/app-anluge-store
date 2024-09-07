import { DeepPartial } from 'react-hook-form'
import { z } from 'zod'

import { FontAwesome6IconName } from 'Types/react-icons'

import { Theme } from '~/config/themes'
import { AlertButton } from './components/alert'

export type OpenFormDialogUtilArgsWithDataSchema<
  FormDataObjectType extends z.ZodRawShape
> = [z.ZodObject<FormDataObjectType, 'strip', z.ZodTypeAny>, React.ElementType]
export type OpenFormDialogUtilArgsWithoutDataSchema = [React.ElementType]

export type Handler = () => Promise<any>

export type OpenFormDialogUtilDefaultResponse = {
  reopen: () => void
  close: () => void
}

export type OpenFormDialogUtilFailureResponse =
  OpenFormDialogUtilDefaultResponse & {
    error: true
    success: false
    data: null
  }

export type OpenFormDialogUtilSuccessResponse<Data> =
  OpenFormDialogUtilDefaultResponse & {
    error: false
    success: true
    data: Data
  }

export type AlertUtilButtonsList = Array<`Buttons.${AlertButton}`>

export type AlertResponse = `AlertResponse.${AlertButton}`

export type AlertUtilOptions = {
  buttons?: AlertUtilButtonsList
  icon?: FontAwesome6IconName
}

export type AlertUtilsArgsWithoutTitle = [string, AlertUtilOptions?]

export type AlertUtilsArgsWithTitle = [string, string, AlertUtilOptions?]

export type AlertUtilsArgs =
  | AlertUtilsArgsWithTitle
  | AlertUtilsArgsWithoutTitle

export type ApplicationContextConfig = {
  theme: {
    name: string
    props: Theme
  }
}

export type FormDialogOpenHandler = <FormDataObjectType extends z.ZodRawShape>(
  ...[
    formDataSchema,
    formElement
  ]: OpenFormDialogUtilArgsWithDataSchema<FormDataObjectType>
) => Promise<
  | OpenFormDialogUtilFailureResponse
  | OpenFormDialogUtilSuccessResponse<z.infer<typeof formDataSchema>>
>

export type ApplicationContextProps = {
  origin: string
  config: ApplicationContextConfig

  setConfig: (config: DeepPartial<ApplicationContextConfig>) => void

  openFormDialog: FormDialogOpenHandler
  openSmallFormDialog: FormDialogOpenHandler
  openXSmallFormDialog: FormDialogOpenHandler
  openMediumFormDialog: FormDialogOpenHandler
  openLargeFormDialog: FormDialogOpenHandler
  openXLargeFormDialog: FormDialogOpenHandler
  openXXLargeFormDialog: FormDialogOpenHandler

  alert: (...args: AlertUtilsArgs) => Promise<AlertResponse>

  awaits: <HandlerType extends Handler>(
    handler: HandlerType
  ) => Promise<ReturnType<HandlerType> | null>
}
