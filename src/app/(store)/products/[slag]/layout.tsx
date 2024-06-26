import { Metadata } from 'next'
import { Fragment } from 'react'

import { prisma } from '@services/prisma'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { ProductPageWrapper } from 'store@components/pages/products/page'
import { CategoryProps } from '~/Types/Category'
import { LayoutProps } from '~/Types/next'
import { resolveProductImageUrl, sanitizeSlagTitle } from '~/utils'
import { categoryIncludeFactory } from '~/utils/category'
import {
  categoryListToTree,
  getCategoryFromList
} from '~/utils/models/category'
import { getProductDataBySlag, productIncludeFactory } from '~/utils/product'

type ProductPageParams = {
  slag: string
}

export const generateMetadata = async (
  props: LayoutProps<ProductPageParams>
): Promise<Metadata> => {
  const metaData: Metadata = {}

  const productSlag = sanitizeSlagTitle(props.params.slag)

  const product = await getProductDataBySlag(productSlag)

  if (product) {
    const productPageUrl = `/products/${product.slag}`

    metaData.title = product.name
    metaData.description = product.summary || undefined
    metaData.alternates = {
      canonical: productPageUrl,
      languages: {
        pt: productPageUrl
      }
    }
    metaData.openGraph = {
      type: 'article',
      alternateLocale: 'pt-PT',
      siteName: 'Anluge',
      url: productPageUrl,
      title: product.name,
      description: product.summary || undefined,
      tags: product.tags.map(tag => tag.title),
      images: [
        {
          secureUrl: resolveProductImageUrl(product, 'medium'),
          url: resolveProductImageUrl(product, 'medium'),
          width: 800,
          height: 1200,
          alt: product.name,
          type: 'image/jpeg'
        },
        {
          secureUrl: resolveProductImageUrl(product, 'normal'),
          url: resolveProductImageUrl(product, 'normal'),
          width: 540,
          height: 800,
          alt: product.name,
          type: 'image/jpeg'
        }
      ]
    }
  }

  return metaData
}

export default async function ProductPageTemplate({
  params,
  children
}: LayoutProps<ProductPageParams>) {
  const productSlag = sanitizeSlagTitle(params.slag)

  const product = await getProductDataBySlag(productSlag)

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
