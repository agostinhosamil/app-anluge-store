import { axios } from '@services/axios'

export const lazilyGetAll = async <RecordType = any>(
  requestPath: string
): Promise<Array<RecordType>> => {
  let allRecords: Array<RecordType> = []

  const requestPathQueryStringRe = /(\?(.*))$/
  const RECORD_LOAD_CONCURRENCY = 100

  let recordLoadCursor = 0

  while (true) {
    try {
      const queryStringParameterPrefix = requestPathQueryStringRe.test(
        requestPath
      )
        ? '&'
        : '?'
      const requestPathWithQueryString = `${queryStringParameterPrefix}limit=${recordLoadCursor},${RECORD_LOAD_CONCURRENCY}`
      const response = await axios.get<Array<RecordType>>(
        requestPath.concat(requestPathWithQueryString)
      )

      if (response.data instanceof Array) {
        allRecords = [...allRecords, ...response.data]

        recordLoadCursor += RECORD_LOAD_CONCURRENCY

        if (response.data.length < 1) {
          break
        }

        continue
      }
    } catch (err) {
      // console.log('Error => ', { err })
      // TODO: Handle this
      // pass
    }

    break
  }

  return allRecords
}
