type JsonDataValue =
  | string
  | number
  | boolean
  | Array<JsonDataValue | DefaultJsonDataObject>

type DefaultJsonDataObject =
  | Array<DefaultJsonDataObject>
  | {
      [key: string]: JsonDataValue
    }

export const getJsonFileData = async <JsonDataObject = DefaultJsonDataObject>(
  jsonFileObject: File | Blob
): Promise<JsonDataObject | null> =>
  new Promise(resolve => {
    const fileReader = new FileReader()

    fileReader.onloadend = event => {
      if (!event.target) {
        return resolve(null)
      }

      const jsonFileData = String(event.target.result).trim()

      try {
        const jsonFileDataObject: JsonDataObject = JSON.parse(jsonFileData)

        resolve(jsonFileDataObject)
      } catch (err) {
        resolve(null)
      }
    }

    fileReader.onerror = () => resolve(null)

    fileReader.readAsText(jsonFileObject, 'UTF-8')
  })
