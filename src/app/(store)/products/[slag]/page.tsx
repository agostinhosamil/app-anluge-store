import { Fragment, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

import { AdvertiseGroup } from 'store@components/NewsFeed/AdvertiseGroup'
import { CategoryMapSlider } from 'store@components/NewsFeed/CategoryMapSlider'
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
      <div className="w-full max-w-[1320px] mx-auto px-[50px]">
        <Suspense fallback={loadingData}>
          <ProductSiblings product={product} />
        </Suspense>
      </div>
      <div className="w-full max-w-[1320px] mx-auto block pt-6 pb-9">
        <CategoryMapSlider rows={3} />
      </div>
      <div className="w-full max-w-[1320px] mx-auto">
        <AdvertiseGroup group="bottom" />
      </div>
    </ProductPageWrapper>
  )
}
