const lower = (str: string): string => str.toLowerCase()

export const stringsMatch = (
  firstString: string,
  secondString: string
): boolean => {
  if (
    firstString === secondString ||
    lower(firstString) === lower(secondString)
  ) {
    return true
  }

  return Boolean(
    lower(firstString).includes(lower(secondString)) ||
      lower(secondString).includes(lower(firstString))
  )
}
