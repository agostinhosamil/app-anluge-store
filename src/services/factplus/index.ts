import { axios } from '@services/axios/factplus'

import { APICallRequests, ResponseByDocumentMap } from './types'

export * from './types'

export const request = async <
  DocumentType extends keyof ResponseByDocumentMap,
  Action extends keyof APICallRequests<DocumentType>
>(
  action: Action,
  props: APICallRequests<DocumentType>[Action]['DocumentData']
): Promise<APICallRequests<DocumentType>[Action]['Response'] | undefined> => {
  try {
    const defaultRequestBodyProps = {
      apicall: action,
      apikey: String(process.env.FACT_PLUS_API_ACCESS_KEY)
    }

    const response = await axios.post<
      APICallRequests<DocumentType>[Action]['Response']
    >('/', {
      ...defaultRequestBodyProps,
      ...props
    })

    return response.data
  } catch (err) {
    /**
     * TODO: handle this correctly
     */
    // pass
  }

  return
}
