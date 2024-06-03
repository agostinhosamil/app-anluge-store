import { noEmpty } from '~/utils'
import { ExcelFileDataStructure, ExcelFileLine, KeyRewriteMap } from './types'

export const emptyLine = (line: ExcelFileLine): boolean => {
  return !Boolean(line.find(col => noEmpty(col)))
}

export const stripEmptyLines = (fileData: ExcelFileDataStructure) => {
  return fileData.filter(line => !emptyLine(line))
}

export const buildJsonDataObject = <DataType extends object = any>(
  heads: ExcelFileLine,
  cols: ExcelFileLine
): DataType => {
  const jsonDataObject: DataType = {} as DataType

  let i = 0

  for (; i < heads.length; i++) {
    const key = String(heads[i]) as keyof DataType
    const value = cols[i] as DataType[keyof DataType]

    jsonDataObject[key] = value
  }

  return jsonDataObject
}

export const applyKeyRewriteMap = (
  keyRewriteMap: KeyRewriteMap,
  heads: ExcelFileLine
): ExcelFileLine => {
  return heads.map(head => {
    const key = String(head)

    if (key in keyRewriteMap) {
      return keyRewriteMap[key]
    }

    return key
  })
}
