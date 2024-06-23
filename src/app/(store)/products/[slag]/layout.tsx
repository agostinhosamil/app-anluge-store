import { Fragment } from 'react'

import { prisma } from '@services/prisma'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { ProductPageWrapper } from 'store@components/pages/products/page'
import { CategoryProps } from '~/Types/Category'
import { LayoutProps } from '~/Types/next'
import { categoryIncludeFactory } from '~/utils/category'
import {
  categoryListToTree,
  getCategoryFromList
} from '~/utils/models/category'
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
    return (
      <Fragment>
        <NotFoundPageContent />
      </Fragment>
    )
  }

  const categories: Array<CategoryProps> = await prisma.category.findMany({
    include: {
      categories: {
        include: categoryIncludeFactory()
      },

      products: {
        include: productIncludeFactory()
      }
    }
  })

  const productCategory = getCategoryFromList(
    product.categoryId || '<<non-existing-category>>',
    categoryListToTree(categories)
  )
  // await prisma.category.findUnique({
  //   where: {
  //     id: product.categoryId || '<<non-existing-category>>'
  //   },

  //   include: {
  //     categories: {
  //       include: categoryIncludeFactory()
  //     },
  //     products: {
  //       include: productIncludeFactory()
  //     }
  //   }
  // })

  return (
    <ProductPageWrapper product={product} category={productCategory}>
      {children}
    </ProductPageWrapper>
  )
}
