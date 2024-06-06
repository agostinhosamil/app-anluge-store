import { compareSync } from 'bcryptjs'

import { LoadingStockMap, ProductProps } from '~/Types/Product'

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

export const getQueryMatchSearchParam = (params: URLSearchParams) => {
  const queryParams = Array.from(params.entries())

  const matchQuery = queryParams.find(([query, value]) => {
    return /^(match)/i.test(query)
  })

  return matchQuery || ['', '']
}

export const getSearchParamsQueryArgument = (queryString: URLSearchParams) => {
  const queryArguments = {}

  const queryLimit = queryString.get('limit')
  const [queryMatch, queryMatchValue] = getQueryMatchSearchParam(queryString) // queryString.get('query')

  if (noEmpty(queryLimit)) {
    const queryLimitSlices = queryLimit.split(/\s*,\s*/)

    const [skip, take] =
      queryLimitSlices.length >= 2
        ? queryLimitSlices.map(slice => parseInt(slice))
        : [0, parseInt(queryLimitSlices[0])]

    Object.assign(queryArguments, { skip, take })
  }

  if (noEmpty(queryMatch) && noEmpty(queryMatchValue)) {
    const validFunctionNames = ['contains', 'endsWith', 'startsWith', 'equals']

    const queryMatchSplittersRe = /(\.|:)/

    const queryMatchStrSlices = queryMatch
      .split(queryMatchSplittersRe)
      .filter(slice => !queryMatchSplittersRe.test(slice))

    const [, fieldName, functionName] = queryMatchStrSlices.concat([
      'name',
      'contains'
    ])

    if (validFunctionNames.includes(functionName)) {
      Object.assign(queryArguments, {
        where: {
          [fieldName]: {
            [functionName]: queryMatchValue
          }
        }
      })
    }
  }

  return queryArguments
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

export const resolveProductImageUrl = (product: ProductProps): string => {
  const productMedias = product.medias

  if (productMedias instanceof Array && productMedias.length >= 1) {
    const productMainMedia = productMedias[0]

    return uploadedImageUrl(productMainMedia.fileName)
  }

  return uploadedImageUrl('product-image-placeholder.jpg')
}
