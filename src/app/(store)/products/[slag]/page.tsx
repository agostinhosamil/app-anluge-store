import { Fragment, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import { NotFoundPageContent } from '~/components/store/NotFoundPageContent'
import { ProductPageWrapper } from '~/components/store/pages/products/page'
import { PageProps } from '~/Types/next'
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
        <Suspense fallback={loadingData}>
          <ProductSiblings product={product} />
        </Suspense>
      </Content>
    </ProductPageWrapper>
  )
}
