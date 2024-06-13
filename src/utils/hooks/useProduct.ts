import { useEffect, useState } from 'react'

import { getProducts } from '@utils/models/product'
import { ProductProps } from 'Types/Product'

export const useProduct = (query?: string) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<Array<ProductProps>>([])

  useEffect(() => {
    const effectHandler = async () => {
      await getProducts(query, ({ allLoadedRecords }) => {
        // console.log(
        //   `\n\n\n\n\nAlready got ${allLoadedRecords.length} records: `,
        //   allLoadedRecords,
        //   '\n\n\n'
        // )

        setProducts(allLoadedRecords)

        if (loading) {
          setLoading(false)
        }

        // if (products.length < 1) {
        // }
      })

      // console.log('Total posts count => ', products.length)

      // if (products instanceof Array && products.length >= 1) {
      //   setProducts(products)
      // }

      if (loading) {
        setLoading(false)
      }
    }

    effectHandler()
  }, [query])

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
    },

    reloadProductsByQuery(query?: string) {
      setLoading(true)

      getProducts(query)
        .then(products => {
          setProducts(products)
        })
        .finally(() => {
          setLoading(false)
        })
    },

    reloadProducts() {
      setLoading(true)

      getProducts()
        .then(products => {
          setProducts(products)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }
}
