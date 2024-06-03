import { useEffect, useState } from 'react'

import { getProducts } from '@utils/models/product'
import { ProductProps } from 'Types/Product'

export const useProduct = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<Array<ProductProps>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const products = await getProducts()

      if (products instanceof Array && products.length >= 1) {
        setProducts(products)
      }

      setLoading(false)
    }

    effectHandler()
  }, [])

  return {
    products,
    loading,

    addProduct(product: ProductProps) {
      setProducts([...products, product])
    },

    updateProduct(productId: string, data: Partial<ProductProps>) {
      setProducts(
        products.map(product => {
          if (product.id !== productId) {
            return product
          }

          return {
            ...product,
            ...data
          }
        })
      )
    },

    deleteProduct(productId: string) {
      setProducts(products.filter(product => product.id !== productId))
    }
  }
}
