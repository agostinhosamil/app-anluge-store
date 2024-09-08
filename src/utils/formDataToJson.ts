import { objectFullMerge } from './objectFullMerge'

const getFormDataKeyTreePath = (key: string): Array<string> => {
  const re = /(\]?\[|\]\[?)/

  return key.split(re).filter(keySlice => {
    return !re.test(keySlice) && /\S/.test(keySlice)
  })
}

export const formDataToJson = <JsonDataObject extends object = any>(
  formData: FormData
): JsonDataObject => {
  let jsonData = {} as JsonDataObject

  formData.forEach((value, key) => {
    let data = value as any

    const keyTreePath = getFormDataKeyTreePath(key)

    const formDataArrayKeyRe = /(\[\])$/

    if (formDataArrayKeyRe.test(key)) {
      data = [data] // formData.getAll(key)
    }

    keyTreePath.reverse().forEach(property => {
      data = { [property]: data }
    })

    jsonData = objectFullMerge(jsonData, data)
  })

  return jsonData
}
