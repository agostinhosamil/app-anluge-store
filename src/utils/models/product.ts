import { AxiosResponse } from 'axios'

import { Product } from '@prisma/client'
import { axios } from '@services/axios'
import { ProductsImagesData } from '@utils/getProductsImagesFromZipFile'
import { ProductProps } from '~/Types/Product'
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
