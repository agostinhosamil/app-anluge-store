import { axios } from '@services/axios'
import { getUrlQueryParams, queryParamsObjectToString } from '.'

export type LazilyGetAllUtilEachLoadCallbackProps<RecordType> = {
  data: Array<RecordType>
  allLoadedRecords: Array<RecordType>
  finished: boolean
}

export type LazilyGetAllUtilEachLoadCallback<RecordType> = (
  props: LazilyGetAllUtilEachLoadCallbackProps<RecordType>
) => void

export const lazilyGetAll = async <RecordType = any>(
  requestPath: string,
  onEachLoadEndCallback?: LazilyGetAllUtilEachLoadCallback<RecordType>
): Promise<Array<RecordType>> => {
  let allRecords: Array<RecordType> = []

  const requestPathQueryStringRe = /(\?(.*))$/
  const RECORD_LOAD_CONCURRENCY = 100

  let recordLoadCursor = 0

  while (true) {
    try {
      const requestPathQueryParams = getUrlQueryParams(requestPath)

      requestPathQueryParams['limit'] = [
        recordLoadCursor,
        RECORD_LOAD_CONCURRENCY
      ].join(',')

      requestPath = requestPath.replace(requestPathQueryStringRe, '')

      // console.log(
      //   'Updated Request Path => ',
      //   requestPath.concat(
      //     '?',
      //     queryParamsObjectToString(requestPathQueryParams)
      //   )
      // )

      // const queryStringParameterPrefix = requestPathQueryStringRe.test(
      //   requestPath
      // )
      //   ? '&'
      //   : '?'
      // const requestPathWithQueryString = `${queryStringParameterPrefix}limit=${recordLoadCursor},${RECORD_LOAD_CONCURRENCY}`
      const response = await axios.get<Array<RecordType>>(
        requestPath.concat(
          '?',
          queryParamsObjectToString(requestPathQueryParams)
        )
      )

      if (response.data instanceof Array) {
        allRecords = [...allRecords, ...response.data]

        // console.log(`Got ${response.data.length} records: `, response.data)

        recordLoadCursor += RECORD_LOAD_CONCURRENCY

        const onEachLoadEndCallbackProps: LazilyGetAllUtilEachLoadCallbackProps<RecordType> =
          {
            allLoadedRecords: allRecords,
            data: response.data,
            finished: false
          }

        if (response.data.length < 1) {
          if (typeof onEachLoadEndCallback === 'function') {
            onEachLoadEndCallback({
              ...onEachLoadEndCallbackProps,
              finished: true
            })
          }

          break
        }

        if (typeof onEachLoadEndCallback === 'function') {
          onEachLoadEndCallback(onEachLoadEndCallbackProps)
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
