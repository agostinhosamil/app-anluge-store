import { Fragment, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

import { AdvertiseGroup } from 'store@components/NewsFeed/AdvertiseGroup'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { ProductPageWrapper } from 'store@components/pages/products/page'
import {
  ProductDetailsTable,
  ProductDetailsTablePlaceHolder
} from 'store@components/ProductPage/ProductDetailsTable'
import { PageProps } from 'Types/next'
import { sanitizeSlagTitle } from '~/utils'
import { getProductDataBySlag } from '~/utils/product'

import { Content } from './content'
import { ProductSiblings } from './ProductSiblings'

type Params = {
  slag: string
}

export default async function ProductPage({ params }: PageProps<Params>) {
  const productSlag = sanitizeSlagTitle(params.slag)

  const product = await getProductDataBySlag(productSlag)

  if (!product) {
    return (
      <Fragment>
        <NotFoundPageContent />
      </Fragment>
    )
  }
  // const { product } = useProductPageContext()

  const loadingData = (
    <div>
      <h1>
        Loading...
        <Spinner size="sm" />
      </h1>
    </div>
  )

  return (
    <ProductPageWrapper product={product}>
      <Content>
        <Suspense fallback={<ProductDetailsTablePlaceHolder />}>
          <ProductDetailsTable productId={product.id} />
        </Suspense>
      </Content>
      <div className="w-full px-[50px]">
        <Suspense fallback={loadingData}>
          <ProductSiblings product={product} />
        </Suspense>
      </div>
      <AdvertiseGroup group="bottom" />
    </ProductPageWrapper>
  )
}
