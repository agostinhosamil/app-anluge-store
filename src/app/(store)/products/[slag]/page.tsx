'use client'

import { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

import { useProductPageContext } from '~/components/store/pages/products/page/context'
import { Content } from './content'
import { ProductSiblings } from './ProductSiblings'

export default async function ProductPage() {
  const { product } = useProductPageContext()

  const loadingData = (
    <div>
      <h1>
        Loading...
        <Spinner size="sm" />
      </h1>
    </div>
  )

  return (
    <Content>
      <Suspense fallback={loadingData}>
        <ProductSiblings product={product} />
      </Suspense>
    </Content>
  )
}
