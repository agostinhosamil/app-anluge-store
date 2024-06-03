import readExcelFile from 'read-excel-file'
import { ExcelFileDataStructure, KeyRewriteMap } from './types'
import {
  applyKeyRewriteMap,
  buildJsonDataObject,
  stripEmptyLines
} from './utils'

type ExcelFileInput = File | Blob

export const excelFileDataToJson = async <Data extends object = any>(
  excelFile: ExcelFileInput,
  keyRewriteMap?: KeyRewriteMap
): Promise<Array<Data>> => {
  try {
    const excelFileData = await readExcelFile(excelFile)

    const mapFileData = stripEmptyLines(excelFileData as ExcelFileDataStructure)

    if (mapFileData instanceof Array && mapFileData.length >= 1) {
      const parsedJsonData: Array<Data> = []

      let i = 1

      const heads =
        keyRewriteMap && typeof keyRewriteMap === 'object'
          ? applyKeyRewriteMap(keyRewriteMap, mapFileData[0])
          : mapFileData[0]

      for (; i < mapFileData.length; i++) {
        const jsonDataObject = buildJsonDataObject<Data>(heads, mapFileData[i])

        parsedJsonData.push(jsonDataObject)
      }

      return parsedJsonData
    }
  } catch (err) {
    console.log('\n\n\n\n\n\nError => ', err, '\n\n\n\n\n\n\n')
  }

  return []
}
