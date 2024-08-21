import { z } from 'zod'

export type OpenFormDialogUtilArgsWithDataSchema<
  FormDataObjectType extends z.ZodRawShape
> = [z.ZodObject<FormDataObjectType, 'strip', z.ZodTypeAny>, React.ElementType]
export type OpenFormDialogUtilArgsWithoutDataSchema = [React.ElementType]

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

export type ApplicationContextProps = {
  origin: string

  openFormDialog: <FormDataObjectType extends z.ZodRawShape>(
    ...[
      formDataSchema,
      formElement
    ]: OpenFormDialogUtilArgsWithDataSchema<FormDataObjectType>
  ) => Promise<
    | OpenFormDialogUtilFailureResponse
    | OpenFormDialogUtilSuccessResponse<z.infer<typeof formDataSchema>>
  >
}
