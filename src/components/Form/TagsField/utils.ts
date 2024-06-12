export const resolveFieldName = (name: string): string => {
  const re = /(\[\])$/

  return re.test(name) ? name : `${name}[]`
}
