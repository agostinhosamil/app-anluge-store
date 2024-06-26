import { Metadata } from 'next'
import { cache, Fragment } from 'react'

import { LayoutProps } from '~/Types/next'
import { ProductProps } from '~/Types/Product'
import { resolveProductImageUrl, sanitizeSlagTitle } from '~/utils'
import { getProductDataBySlag } from '~/utils/product'

type ProductPageParams = {
  slag: string
}

const getProductData = cache(
  async (slag: string): Promise<ProductProps | null> => {
    const product = await getProductDataBySlag(slag)

    return product
  }
)

export const generateMetadata = async (
  props: LayoutProps<ProductPageParams>
): Promise<Metadata> => {
  const metaData: Metadata = {}

  const productSlag = sanitizeSlagTitle(props.params.slag)

  const product = await getProductData(productSlag)

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

export const maxDuration = 60

export default async function ProductPageTemplate({
  // params,
  children
}: LayoutProps<ProductPageParams>) {
  // const productSlag = sanitizeSlagTitle(params.slag)

  // const product = await getProductData(productSlag)

  // console.log(product)

  // if (!product) {
  //   return (
  //     <Fragment>
  //       <NotFoundPageContent />
  //     </Fragment>
  //   )
  // }
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

  // return <ProductPageWrapper product={product}>{children}</ProductPageWrapper>

  return <Fragment>{children}</Fragment>
}
