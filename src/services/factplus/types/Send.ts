import { ResponseByDocumentMap } from '.'

export type SendRequest = {
  DocumentData: {
    document: {
      reference: string
      type: keyof ResponseByDocumentMap
    }

    recipient: {
      address: string
      subject: string
      message: string
      copy: 0 | 1
    }
  }
  Response: SendResponse
}

export type SendSuccessResponse = {
  result: 'success'
  data: boolean
}

export type SendFailureResponse = {
  result: 'failure'
  data: undefined
}

export type SendResponse = (SendSuccessResponse | SendFailureResponse) & {
  message: string
}
