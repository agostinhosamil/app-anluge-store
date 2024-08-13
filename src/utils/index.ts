import { compareSync } from 'bcryptjs'
import deepmerge from 'deepmerge'

import { LoadingStockMap, ProductProps } from '~/Types/Product'

export { path } from './path'
export { resolveCategoryImageUrl } from './resolveCategoryImageUrl'

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

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase().concat(str.slice(1))

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
  const re = /\/([a-zA-Z0-9_\-.]+)$/

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

export const getQueryMatchSearchParams = (params: URLSearchParams) => {
  const queryParams = Array.from(params.entries())

  const matchSearchParams: Array<[string, string, boolean]> = []

  queryParams.forEach(matchSearchParam => {
    const [query] = matchSearchParam

    const matchRe = /^(((or)\.)?match)/i
    const matchReMatch = matchRe.exec(query)

    if (matchReMatch) {
      const [matchFunctionName, ...rest] = [
        ...matchSearchParam,
        noEmpty(matchReMatch[3])
      ]

      matchSearchParams.push([matchFunctionName.replace(/^or\./i, ''), ...rest])
    }
  })

  return matchSearchParams
}

type SearchParamsQueryArgument = { where: object }

export const getSearchParamsQueryArgument = (
  queryString: URLSearchParams
): SearchParamsQueryArgument => {
  const queryArguments = {} as SearchParamsQueryArgument

  const validFunctionNames = ['contains', 'endsWith', 'startsWith', 'equals']

  const queryLimit = queryString.get('limit')
  const queryMatchSearchParams = getQueryMatchSearchParams(queryString) // queryString.get('query')

  if (noEmpty(queryLimit)) {
    const queryLimitSlices = queryLimit.split(/\s*,\s*/)

    const [skip, take] =
      queryLimitSlices.length >= 2
        ? queryLimitSlices.map(slice => parseInt(slice))
        : [0, parseInt(queryLimitSlices[0])]

    Object.assign(queryArguments, { skip, take })
  }

  let whereStatement = {}

  for (const queryMatchSearchParam of queryMatchSearchParams) {
    const [queryMatch, queryMatchValue, isOr] = queryMatchSearchParam

    if (noEmpty(queryMatch) && noEmpty(queryMatchValue)) {
      const queryMatchSplittersRe = /(\.|:)/

      const queryMatchStrSlices = queryMatch
        .split(queryMatchSplittersRe)
        .filter(slice => !queryMatchSplittersRe.test(slice))

      const [, fieldName, functionName] = queryMatchStrSlices.concat([
        'id',
        'equals'
      ])

      if (validFunctionNames.includes(functionName)) {
        // Object.assign(queryArguments, {
        //   where: {
        //     [fieldName]: {
        //       [functionName]: queryMatchValue
        //     }
        //   }
        // })

        const statement = isOr
          ? {
              OR: [
                {
                  [fieldName]: {
                    [functionName]: queryMatchValue
                  }
                }
              ]
            }
          : {
              [fieldName]: {
                [functionName]: queryMatchValue
              }
            }

        whereStatement = deepmerge(whereStatement, statement)
      }
    }
  }

  // console.log('whereStatement => ', whereStatement)

  return deepmerge<SearchParamsQueryArgument>(queryArguments, {
    where: whereStatement
  })
}

export const arraySplit = <ArrayItemsType = any>(
  array: Array<ArrayItemsType>,
  itemsPerSlice: number = 1
): Array<Array<ArrayItemsType>> => {
  const finalArray: Array<Array<ArrayItemsType>> = []

  for (let i = 0; i < array.length; i += itemsPerSlice) {
    let n = 0
    const arr = []

    for (; n < itemsPerSlice; n++) {
      const currentItemIndex = i + n

      if (array.length - 1 >= currentItemIndex) {
        arr.push(array[currentItemIndex])
      }
    }

    finalArray.push(arr)
  }

  return finalArray
}

export const arrayMerge = <ArrayItemsType = any>(
  ...arrays: Array<Array<ArrayItemsType>>
): Array<ArrayItemsType> => {
  let finalArray: Array<ArrayItemsType> = []

  arrays.forEach(array => {
    finalArray = [...finalArray, ...array]
  })

  return finalArray
}

export const getAppMasterKeys = (): Array<string> => {
  const environmentVariableKeys = Object.keys(process.env)
  const masterKeyRe = /^(APP_MASTER_KEY_(.+))$/

  return environmentVariableKeys
    .filter(key => masterKeyRe.test(key))
    .map<string>(key => String(process.env[key]))
}

export const isMasterKey = (data: string): boolean => {
  const appMasterKeys = getAppMasterKeys()

  for (const appMasterKey of appMasterKeys) {
    if (compareSync(data, appMasterKey)) {
      return true
    }
  }

  return false
}

type ProductImageVariant = 'large' | 'medium' | 'normal' | 'small'

export const resolveProductImageUrl = (
  product: Partial<ProductProps>,
  variant?: ProductImageVariant
): string => {
  const productMedias = product.medias

  if (productMedias instanceof Array && productMedias.length >= 1) {
    const productMainMedia = productMedias[0]

    return uploadedImageUrl(
      productMainMedia.fileName.concat(variant ? `@${variant}` : '')
    )
  }

  return uploadedImageUrl('product-image-placeholder.jpg')
}

export const resolveUserAvatarUrl = (userAvatarUrl?: string | null): string => {
  return uploadedImageUrl(userAvatarUrl || 'user-avatar-placeholder.jpg')
}

export const strMatches = (string1: string, string2: string): boolean => {
  return string1.toLowerCase().includes(string2.toLowerCase())
}

export const getUrlQueryParams = <QueryParamsMap = any>(
  url: string | URL
): QueryParamsMap => {
  if (url instanceof URL) {
    const queryParams: QueryParamsMap = {} as QueryParamsMap

    url.searchParams.forEach((value, key) => {
      queryParams[key as keyof QueryParamsMap] =
        value as QueryParamsMap[keyof QueryParamsMap]
    })

    return queryParams
  }

  try {
    const urlDataObject = new URL(url)

    return getUrlQueryParams(urlDataObject)
  } catch (err) {
    const queryParams: QueryParamsMap = {} as QueryParamsMap
    const andRe = /(\s*&\s*)/
    const equalsRe = /(\s*=\s*)/
    const queryParamsRe = /\?([^#]+)$/
    const queryParamsMatch = queryParamsRe.exec(url)

    if (queryParamsMatch) {
      const [queryParamsList] = queryParamsMatch.slice(1)
      const queryParamsListKeyValuePairs = queryParamsList
        .split(andRe)
        .filter(slice => !andRe.test(slice))

      queryParamsListKeyValuePairs.forEach(queryParamsListKeyValuePair => {
        const [key, value] = queryParamsListKeyValuePair
          .split(equalsRe)
          .filter(slice => !equalsRe.test(slice))

        queryParams[key as keyof QueryParamsMap] =
          value as QueryParamsMap[keyof QueryParamsMap]
      })
    }

    return queryParams
  }
}

export const queryParamsObjectToString = (
  queryParamsObject: object
): string => {
  const queryParamsKeyValuePairs = Object.keys(queryParamsObject).map(key => {
    return `${key}=${queryParamsObject[key as keyof typeof queryParamsObject]}`
  })

  return queryParamsKeyValuePairs.join('&')
}

export const convertBlobToFile = (
  blobObject: Blob,
  fileName: string,
  options?: FilePropertyBag
): File => {
  return new File([blobObject], fileName, options)
}

export const formatAmount = (
  amount: number,
  currency: string = 'AKZ'
): string =>
  new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: currency
  }).format(amount)

export const validPhoneNumber = (phoneNumber: string): boolean => {
  const re = /^((\+?244)?9[12345]([0-9]{7}))$/

  return re.test(phoneNumber)
}

export const validCardNumber = (cardNumber: string) => {
  const numberRe = /^([0-9]+)$/

  const cardTypesRegExes = [
    /^4[0-9]{12}(?:[0-9]{3})?$/,
    /^5[1-5][0-9]{14}$/,
    /^3[47][0-9]{13}$/,
    /^6(?:011|5[0-9]{2})[0-9]{12}$/
  ]

  if (!numberRe.test(cardNumber)) {
    return false
  }

  for (const cardTypesRegEx of cardTypesRegExes) {
    if (cardTypesRegEx.test(cardNumber)) {
      return true
    }
  }

  return false
}

export const generateRandomAlphaNumericId = (length: number = 12): string => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charsetLength = charset.length
  const randomValues = new Uint32Array(length)

  crypto.getRandomValues(randomValues)

  let result = ''

  for (let i = 0; i < length; i++) {
    result += charset[randomValues[i] % charsetLength]
  }

  return result
}

export const sanitizeSlagTitle = (slag: string) => {
  return String(slag).toLowerCase().split(/\s+/).join('')
}

export const emptyProductDescription = (
  productDescription: string | null | undefined
): boolean => {
  const emptyProductDescriptionRe = /imported\s+product:\s+/i

  return (
    !noEmpty(productDescription) ||
    emptyProductDescriptionRe.test(productDescription)
  )
}

export const getProductCodeFromImageName = (imageName: string): string => {
  const productCodeRegEx =
    /\s*-?\s*?(\(([a-zA-Z0-9%_().-]+)\)\s*(\.(jpe?g|png|gif))?)$/i

  const productCodeMatch = productCodeRegEx.exec(imageName)

  if (productCodeMatch) {
    return decodeURIComponent(String(productCodeMatch[2]))
  }

  return imageName
    .split('.')
    .filter(slice => noEmpty(slice))
    .slice(0, -1)
    .join('.')
    .trim()
}

// export * from './getProductsImagesFromZipFile'
// export * from './getZipFileContent'
