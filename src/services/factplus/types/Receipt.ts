import { ResponseByDocumentMap } from '.'
import { PaymentMethod } from './PaymentMethod'

export type ReceiptRequest = {
  DocumentData: {
    document: {
      reference: string
      type: keyof ResponseByDocumentMap
    }

    payment: {
      amount: number
      date: string
      serie: number
      pm: PaymentMethod
      observation: string
    }
  }
  Response: ReceiptResponse
}

export type ReceiptSuccessResponse = {
  result: 'success'
  data: boolean
}

export type ReceiptFailureResponse = {
  result: 'failure'
  data: undefined
}

export type ReceiptResponse = (
  | ReceiptSuccessResponse
  | ReceiptFailureResponse
) & {
  message: string
}
