import { ResponseByDocumentMap } from '.'
import { Currency } from './Currency'

type ExistingClient = {
  name: string
}

type NonExistingClient = {
  name: string
  nif?: string
  email?: string
  city: string
  address: string
  postalcode?: string
  country: string
}

type Item = {
  itemcode: string
  description: string
  price: string
  quantity: string
  tax: string
  discount: string
  exemption_code: string
  retention: string
  unit: string
}

export type CreateRequest = {
  DocumentData: {
    document: {
      type: keyof ResponseByDocumentMap
      date: string
      duedate: string
      vref: string
      serie: string
      currency: Currency
      exchange_rate: string
      observation: string
      retention: string
    }
    client: ExistingClient | NonExistingClient
    items: Array<Item>
  }
  Response: CreateResponse
}

export type CreateSuccessResponse = {
  status: 'success'
  data: string
}

export type CreateFailureResponse = {
  status: 'failure'
  data: undefined
}

export type CreateResponse = (CreateSuccessResponse | CreateFailureResponse) & {
  message: string
}
