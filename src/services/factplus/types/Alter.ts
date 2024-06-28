import { DocumentStatus, ResponseByDocumentMap } from '.'

export type AlterRequest = {
  DocumentData: {
    document: {
      reference: string
      type: keyof ResponseByDocumentMap
      status: DocumentStatus
      reason: string
    }
  }
  Response: AlterResponse
}

type AlterSuccessResponse = {
  result: 'success'
  data: boolean
}

type AlterFailureResponse = {
  result: 'failure'
  data: undefined
}

export type AlterResponse = (AlterSuccessResponse | AlterFailureResponse) & {
  message: string
}
