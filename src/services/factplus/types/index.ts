import { AlterRequest } from './Alter'
import { CreateRequest } from './Create'
import { ReceiptRequest } from './Receipt'
import { SendRequest } from './Send'
import { ViewRequest } from './View'

export * from './Alter'
export * from './Create'
export * from './Currency'
export * from './PaymentMethod'
export * from './Receipt'
export * from './Send'
export * from './View'

export type ResponseByDocumentMap = {
  factura: any
  proforma: any
  'factura-recibo': any
  recibo: any
}

export type APICallRequests<DocumentType extends keyof ResponseByDocumentMap> =
  {
    /**
     * Create a new document
     */
    CREATE: CreateRequest
    /**
     * Create a new document
     */
    RECEIPT: ReceiptRequest
    /**
     * Get a document data by reference
     */
    VIEW: ViewRequest<DocumentType>
    /**
     * Change a document state by reference
     */
    ALTER: AlterRequest
    /**
     * Send a document by email for requesting payment
     */
    SEND: SendRequest
  }

export type APICallAction<DocumentType extends keyof ResponseByDocumentMap> =
  keyof APICallRequests<DocumentType>

export type DocumentStatus =
  | 'draft'
  | 'sent'
  | 'settled'
  | 'canceled'
  | 'accepted'
  | 'refused'

export type DocumentType = keyof ResponseByDocumentMap

export type FactPlusRequestSender = <
  DocumentType extends keyof ResponseByDocumentMap,
  Action extends keyof APICallRequests<DocumentType>
>(
  action: Action,
  documentData: APICallRequests<DocumentType>[Action]['DocumentData']
) => Promise<APICallRequests<DocumentType>[Action]['Response'] | null>
