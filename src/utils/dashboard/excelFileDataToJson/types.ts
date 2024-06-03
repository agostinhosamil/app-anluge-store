export type ExcelCelData = string | null | number

export type ExcelFileLine = Array<ExcelCelData>

export type ExcelFileDataStructure = Array<ExcelFileLine>

export type KeyRewriteMap = {
  [key: string]: string
}
