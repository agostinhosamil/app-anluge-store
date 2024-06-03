import { Product } from '@prisma/client'
import { axios } from '@services/axios'
import { ProductProps } from '~/Types/Product'

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

export const massStoreProducts = async (
  products: Array<Product>
): Promise<Array<Product> | null> => {
  try {
    const response = await axios.post('/store/products/mass-store', {
      products
    })

    if (response.data instanceof Array) {
      return response.data
    }
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

export const getProducts = async (): Promise<Array<ProductProps>> => {
  try {
    const response = await axios.get<Array<ProductProps>>('/store/products')

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {
    // pass
  }

  return []
}
