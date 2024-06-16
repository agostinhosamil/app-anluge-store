export const resolveFieldName = (name: string): string => {
  const re = /(\[\])$/

  return re.test(name) ? name : `${name}[]`
}

export type FieldNameSplitArray = [string, string]

export const fieldNameSplit = (fieldName: string): FieldNameSplitArray => {
  const fieldNameHeadRe = /^(.[^\[]+)/
  const fieldNameHeadMatch = fieldName.match(fieldNameHeadRe)

  if (fieldNameHeadMatch) {
    return [fieldNameHeadMatch[0], fieldName.replace(fieldNameHeadRe, '')]
  }

  return [fieldName, '']
}
