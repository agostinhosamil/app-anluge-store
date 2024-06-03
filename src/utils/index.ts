import { LoadingStockMap } from '~/Types/Product'

export const getApiAccessToken = (): string => {
  // const authenticationToken = `cookies().get(
  //   String(process.env.APP_AUTH_COOKIE_NAME)
  // )`

  // if (authenticationToken) {
  //   return authenticationToken
  // }

  return 'token'
}

export type CompanyTaxData = Array<
  | string
  | {
      label: string
      value: string
    }
>

export type UploadedImageVariantKey =
  | 'large'
  | 'small'
  | 'thumb'
  | 'medium'
  | 'default'
  | 'x-small'
  | 'x-large'
  | 'xx-large'

type RangeFunction = (num: number) => number[]

export const stringifyCompanyTaxData = (companyTaxData: CompanyTaxData) => {
  return companyTaxData
    .map(taxData =>
      typeof taxData === 'string'
        ? taxData
        : `${taxData.label.toUpperCase()}: ${taxData.value}`
    )
    .join(' | ')
}

export const getParentButtonElement = (
  element: HTMLElement
): HTMLButtonElement => {
  if (element instanceof HTMLButtonElement) {
    return element
  }

  if (element.parentNode instanceof HTMLButtonElement) {
    return element.parentNode
  }

  if (!element.parentNode) {
    throw new Error('The given element has not a parent button element')
  }

  return getParentButtonElement(element.parentNode as HTMLElement)
}

export const range: RangeFunction = num => {
  const arr: number[] = []

  let i = 0

  while (i++ < num) {
    arr.push(i)
  }

  return arr
}

export const noEmpty = (data: any): data is string => {
  return typeof data === 'string' && /\S/.test(data)
}

export const empty = (data: any): boolean => !noEmpty(data)

export const generateRandomId = (): string =>
  '10' +
  Math.random().toString().replace(/\./g, '') +
  Date.now() +
  Math.round(Date.now() * Math.random())

export const getObjectProps = <ObjectType = any>(
  object: ObjectType,
  props: Array<keyof ObjectType> | keyof ObjectType
): ObjectType => {
  const objectData: ObjectType = {} as ObjectType

  props = props instanceof Array ? props : [props]

  for (const prop of props) {
    const key = prop as keyof ObjectType

    if (noEmpty(prop) && typeof object[key] !== typeof undefined) {
      objectData[key] = object[key]
    }
  }

  return objectData
}

export const resolvePartnerCompanyNameByLoadingStockMapFormat = (
  loadingStockMap?: LoadingStockMap
): string => {
  const re = /\/([a-zA-Z0-9_\-\.]+)$/

  const companyNameMatch = re.exec(String(loadingStockMap))

  if (!companyNameMatch) {
    return ''
  }

  return String(companyNameMatch[1] || '')
}

export const uploadedImageUrl = (
  imageName: string,
  imageVariant?: UploadedImageVariantKey
): string => {
  const imagePath = imageName.concat(
    noEmpty(imageVariant) ? `@${imageVariant}` : ''
  )

  return `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/images/${imagePath}`
}
