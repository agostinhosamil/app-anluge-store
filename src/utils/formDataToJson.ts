import deepmerge from 'deepmerge'

const getFormDataKeyTreePath = (key: string): Array<string> => {
  const re = /(\]?\[|\]\[?)/

  return key.split(re).filter(keySlice => {
    return !re.test(keySlice) && /\S/.test(keySlice)
  })
}

export const formDataToJson = <JsonDataObject = any>(
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

    jsonData = deepmerge<JsonDataObject>(jsonData, data)
  })

  return jsonData
}
