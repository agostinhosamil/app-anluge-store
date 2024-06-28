import { DocumentStatus, ResponseByDocumentMap } from '.'

export type ViewResponses = {
  factura: ViewResponse
  proforma: ViewResponse
  'factura-recibo': ViewResponse
  recibo: ViewReceiptResponse
}

export type ViewRequest<DocumentType extends keyof ResponseByDocumentMap> = {
  body: any
  DocumentData: {
    document: ViewRequestDocumentData<DocumentType>
  }
  Response: ViewResponses[DocumentType]
}

export type ViewRequestResult = 'success' | 'failure'

export type MultipleViewResponseData = {
  data: Array<{
    document: Omit<keyof ViewResponses, 'recibo'>
    reference: string
    status: DocumentStatus
    number: string
    client: string
    date: string
    duedate: string
    archived: 0 | 1
    total: number
  }>
}

export type SingleViewResponseData = {
  data?: {
    document: {
      type: Omit<keyof ViewResponses, 'recibo'>
      reference: string
      status: DocumentStatus
      number: string
      serie: string
      date: string
      duedate: string
      vref: string
      currency: string
      exchange_rate: string
      observation: string
      retention: string
      archived: 0 | 1
      cancel_reason: string
      exemption_reason: string
      createdat: string
    }
    client: {
      name: string
      nif: string
      email: string
      telephone: string
      address: string
      city: string
    }
    items: Array<{
      itemcode: string
      description: string
      price: string
      quantity: string
      tax: string
      discount: string
      exemption_code: string
    }>
    summary: {
      sum: string
      discount: string
      retention: string
      stax: string
      wtax: string
      total: number
    }
  }
}

type BaseViewResponse = {
  message: string
  result: ViewRequestResult
}

export type ViewResponse = BaseViewResponse &
  (SingleViewResponseData | MultipleViewResponseData)

export type SingleViewReceiptResponseData = {
  data?: {
    document: {
      type: Omit<keyof ViewResponses, 'recibo'>
      reference: string
      invoice_number: string
      receipt_number: string
      status: DocumentStatus
      serie: string
      date: string
      duedate: string
      vref: string
      currency: string
      exchange_rate: string
      invoice_amount: string
      receipt_payment_amount: string
      receipt_payment_method: string
      observation: string
      cancel_reason: string
      createdat: string
    }
    client: {
      name: string
      nif: string
      email: string
      telephone: string
      address: string
      city: string
    }
  }
}

export type MultipleViewReceiptResponseData = {
  data?: Array<{
    document: Omit<keyof ViewResponses, 'recibo'>
    receipt_reference: string
    invoice_reference: string
    status: DocumentStatus
    number: string
    client: string
    date: string
    duedate: string
    archived: 0 | 1
    total: number
  }>
}

export type ViewReceiptResponse = BaseViewResponse &
  (SingleViewReceiptResponseData | MultipleViewReceiptResponseData)

export type ViewRequestSingleDocumentData<DocumentType> = {
  reference: string
  type: DocumentType
}

export type ViewRequestMultipleDocumentData<DocumentType> = {
  reference: '' | null
  type: DocumentType
  skip?: number
  take?: number
  limit?: number | [number, number]
}

export type ViewRequestDocumentData<DocumentType> =
  | ViewRequestSingleDocumentData<DocumentType>
  | ViewRequestMultipleDocumentData<DocumentType>
