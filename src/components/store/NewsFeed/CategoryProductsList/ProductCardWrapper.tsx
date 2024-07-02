'use client'

import { useEffect, useState } from 'react'

import { ProductProps, ProductWithId } from '~/Types/Product'
import { getProductById } from '~/utils/models/product'
import { ProductCard } from '../ProductCard'
import { ProductCardPlaceHolder } from '../ProductCardPlaceHolder'

type ProductCardWrapperProps = {
  product: ProductWithId
}

type ProductCardWrapperComponent =
  React.FunctionComponent<ProductCardWrapperProps>

export const ProductCardWrapper: ProductCardWrapperComponent = props => {
  const [data, setData] = useState<ProductProps>()

  useEffect(() => {
    const effectHandler = async () => {
      const productData = await getProductById(id)

      if (productData) {
        setData(productData)
      }
    }

    if (!data) {
      effectHandler()
    }
  }, [])

  const { id } = props.product

  if (!data) {
    return <ProductCardPlaceHolder />
  }

  return <ProductCard product={data} />
}
