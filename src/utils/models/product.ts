import { $Enums, Product } from '@prisma/client'
import { AxiosResponse } from 'axios'

import { axios } from '@services/axios'
import { ProductsImagesData } from '@utils/getProductsImagesFromZipFile'
import { ProductProps, ProductWithRates } from '~/Types/Product'
import { PropertyProps } from '~/Types/Property'
import { arrayMerge, arraySplit, noEmpty } from '~/utils'
import {
  lazilyGetAll,
  LazilyGetAllUtilEachLoadCallback
} from '~/utils/lazilyGetAll'

export const createProductByFormData = async (
  formData: FormData
): Promise<ProductProps | null> => {
  try {
    const response = await axios.post<ProductProps>('/store/products', formData)

    const createdProduct = response.data

    if (response.status === 200 && createdProduct.id) {
      return createdProduct
    }
  } catch (err) {
    // pass
  }

  return null
}

// export const massStoreProducts = async (
//   products: Array<Product>
// ): Promise<Array<Product> | null> => {
//   try {
//     const response = await axios.post('/store/products/mass-store', {
//       products
//     })

//     if (response.data instanceof Array) {
//       return response.data
//     }
//   } catch (err) {
//     // pass
//   }

//   return null
// }

// export const massStoreProducts = async (
//   products: Array<Product>
// ): Promise<Array<Product> | null> => {
//   try {
//     const productMassStoreRequestPath = '/store/products/mass-store'

//     const productsQueues = arraySplit(products, 100)

//     // console.log({ productsQueues })

//     const productsMassCreationQueuesResponses = await Promise.all(
//       productsQueues.map(productsQueue => {
//         return axios.post<Array<Product>>(productMassStoreRequestPath, {
//           products: productsQueue
//         })
//       })
//     )

//     const productsMassCreationQueuesResponsesData =
//       productsMassCreationQueuesResponses
//         .filter(response => response.data instanceof Array)
//         .map(response => response.data)

//     const createdProducts = arrayMerge<Product>(
//       ...productsMassCreationQueuesResponsesData
//     )
//     // const response = await axios.post(productMassStoreRequestPath, {
//     //   products
//     // })

//     return createdProducts
//   } catch (err) {
//     // pass
//   }

//   return null
// }

export const massStoreProducts = async (
  products: Array<Product>
): Promise<Array<Product> | null> => {
  try {
    const productMassStoringConcurrency = 10
    const productMassStoreRequestPath = '/store/products/mass-store'
    const productsQueues = arraySplit(products, productMassStoringConcurrency)

    const productsMassCreationQueuesResponses: Array<
      AxiosResponse<Array<Product>>
    > = []

    // const productsMassCreationQueuesResponses = await Promise.all(
    // )
    // const productsMassCreationPromises = .map( => {
    //   return
    // })

    for (const productsQueue of productsQueues) {
      const productsMassCreationPromiseResult = await axios.post<
        Array<Product>
      >(productMassStoreRequestPath, {
        products: productsQueue
      })

      productsMassCreationQueuesResponses.push(
        productsMassCreationPromiseResult
      )
    }

    const productsMassCreationQueuesResponsesData =
      productsMassCreationQueuesResponses
        .filter(response => response.data instanceof Array)
        .map(response => response.data)

    const createdProducts = arrayMerge<Product>(
      ...productsMassCreationQueuesResponsesData
    )
    // const response = await axios.post(productMassStoreRequestPath, {
    //   products
    // })

    return createdProducts
  } catch (err) {
    // pass
  }

  return null
}

export const massUpdateProductsImages = async (
  products: ProductsImagesData
): Promise<Array<ProductProps> | null> => {
  try {
    const productMassUpdateConcurrency = 5
    const productMassStoreRequestPath = '/store/products/image-mass-update'
    const productsQueues = arraySplit(products, productMassUpdateConcurrency)

    const productsMassUpdateQueuesResponses: Array<
      AxiosResponse<Array<ProductProps>>
    > = []

    for (const productsQueue of productsQueues) {
      const productsMassUpdatePromiseResult = await axios.post<
        Array<ProductProps>
      >(productMassStoreRequestPath, {
        products: productsQueue
      })

      productsMassUpdateQueuesResponses.push(productsMassUpdatePromiseResult)
    }

    const productsMassUpdateQueuesResponsesData =
      productsMassUpdateQueuesResponses
        .filter(response => response.data instanceof Array)
        .map(response => response.data)

    const updatedProducts = arrayMerge<ProductProps>(
      ...productsMassUpdateQueuesResponsesData
    )
    // const response = await axios.post(productMassStoreRequestPath, {
    //   products
    // })

    return updatedProducts
  } catch (err) {
    // pass
  }

  return null
}

export const massUpdateProductProps = async (
  productId: string,
  properties: Array<PropertyProps>
): Promise<boolean> => {
  try {
    const productMassUpdateConcurrency = 5
    const productMassStoreRequestPath = `/store/products/${encodeURIComponent(productId)}/properties-mass-update`
    const propertiesQueues = arraySplit(
      properties,
      productMassUpdateConcurrency
    )

    for (const propertiesQueue of propertiesQueues) {
      const productsMassUpdatePromiseResult = await axios.post<
        Array<ProductProps>
      >(productMassStoreRequestPath, {
        properties: propertiesQueue
      })

      if (typeof productsMassUpdatePromiseResult.data !== 'object') {
        // TODO: handle this on condition that should be an error
        continue
      }
    }
  } catch (err) {
    /**
     * TODO: Handle this
     */
    return false
  }

  return true
}

export const updateProductByFormData = async (
  productId: string,
  formData: FormData
): Promise<ProductProps | null> => {
  try {
    const response = await axios.patch<ProductProps>(
      `/store/products/${productId}`,
      formData
    )

    const createdProduct = response.data

    if (response.status === 200 && createdProduct.id) {
      return createdProduct
    }
  } catch (err) {
    // pass
  }

  return null
}

export const deleteProductById = async (
  productId: string
): Promise<boolean> => {
  try {
    const response = await axios.delete(`/store/products/${productId}`)

    if (response.data && response.data.success) {
      return true
    }
  } catch (err) {
    // pass
  }

  return false
}

export const deleteProduct = async (
  product: ProductProps
): Promise<boolean> => {
  return await deleteProductById(product.id)
}

export const getProducts = async (
  query?: string,
  onEachLoadEndCallback?: LazilyGetAllUtilEachLoadCallback<ProductProps>
): Promise<Array<ProductProps>> => {
  try {
    // const response = await axios.get<Array<ProductProps>>(
    //   '/store/products'.concat(
    //     noEmpty(query) ? `?${query.replace(/\?\s*/, '')}` : ''
    //   )
    // )
    const products = await lazilyGetAll<ProductProps>(
      '/store/products'.concat(
        noEmpty(query) ? `?${query.replace(/\?\s*/, '')}` : ''
      ),

      onEachLoadEndCallback
    )

    // console.log('products => ', products)

    if (products instanceof Array) {
      return products
    }
  } catch (err) {
    // pass
  }

  return []
}

export const getProductById = async (
  productId: string
): Promise<ProductProps | null> => {
  try {
    const response = await axios.get<Array<ProductProps>>(
      `/store/products?match.id:equals=${productId}`,

      {
        fetchOptions: {
          next: {
            cache: 'force-cache'
          }
        }
      }
    )

    if (response.data instanceof Array && response.data.length >= 1) {
      return response.data[0]
    }
  } catch (err) {
    /**
     * TODO: Handle this
     */
    // pass
  }

  return null
}

export const getProductRatesAverage = (
  product: ProductWithRates | ProductProps
): number => {
  const productRatesValues = product.rates.map(rate => rate.value)

  if (productRatesValues.length <= 1) {
    return productRatesValues.length > 0 ? productRatesValues[0] : 0
  }

  const productTotalRatesValue = productRatesValues.reduce(
    (currentValue, nextValue) => {
      return currentValue + nextValue
    }
  )

  return Math.round(productTotalRatesValue / productRatesValues.length)
}

export const rewriteProductStateLabel = (
  productState: $Enums.ProductStatus
) => {
  const productStatesMap = {
    [$Enums.ProductStatus.AVAILABLE]: 'Disponível',
    [$Enums.ProductStatus.TRANSIT]: 'Trânsito',
    [$Enums.ProductStatus.UPON_REQUEST]: 'Sob consulta'
  }

  return productStatesMap[productState] || productState
}
