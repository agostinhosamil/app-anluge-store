import { prisma } from '@services/prisma'
import { Fragment } from 'react'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { ProductPageWrapper } from 'store@components/pages/products/page'
import { LayoutProps } from '~/Types/next'
import { productIncludeFactory } from '~/utils/product'

type ProductPageParams = {
  slag: string
}

export default async function ProductPageTemplate({
  params,
  children
}: LayoutProps<ProductPageParams>) {
  const productSlag = String(params.slag).toLowerCase().split(/\s+/).join('')

  const product = await prisma.product.findFirst({
    where: {
      OR: [
        {
          id: productSlag
        },
        {
          slag: productSlag
        }
      ]
    },
    include: productIncludeFactory()
  })

  if (!product) {
    // notFound()

    return (
      <Fragment>
        <NotFoundPageContent />
      </Fragment>
    )
  }

  return <ProductPageWrapper product={product}>{children}</ProductPageWrapper>
}
