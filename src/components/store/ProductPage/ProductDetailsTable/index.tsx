import { $Enums } from '@prisma/client'

import { ProductProps } from 'Types/Product'
import { prisma } from '~/services/prisma'

import { productPropertiesToMap } from '~/app/(store)/(pages)/products/[slag]/utils'
import { rewriteProductStateLabel } from '~/utils/models/product'
import { Content } from './content'
import { PropertyMap } from './types'

type ProductDetailsTablePropsWithProduct = {
  product: ProductProps
}

type ProductDetailsTablePropsWithProductId = {
  productId: string
}

type ProductDetailsTableProps =
  | ProductDetailsTablePropsWithProduct
  | ProductDetailsTablePropsWithProductId

type ProductDetailsTableComponent =
  React.FunctionComponent<ProductDetailsTableProps>

export * from './ProductDetailsTablePlaceHolder'

export const ProductDetailsTable: ProductDetailsTableComponent =
  async props => {
    const productProps: PropertyMap = {}

    const productId = 'productId' in props ? props.productId : props.product.id

    const product = await prisma.product.findUnique({
      where: {
        id: productId
      },

      include: {
        properties: {
          include: {
            properties: true
          }
        }
      }
    })

    type ProductPropertyKey = keyof typeof product
    type ProductPropertyKeyMap = {
      [key: string]:
        | string
        | {
            label: string
            getter?: (value: any) => string
          }
    }

    const productPropertiesKeyMap: ProductPropertyKeyMap = {
      code: 'Código do produto',
      minOrderQuantity: {
        label: 'Quantidade mínima para encomenda',
        getter(value) {
          if (isNaN(value)) {
            return '1'
          }

          const minOrderQuantity = Number(value)

          return `${minOrderQuantity < 1 ? 1 : minOrderQuantity}`
        }
      },
      status: {
        label: 'Estado do produto (Disponibilidade)',
        getter(value: $Enums.ProductStatus) {
          return rewriteProductStateLabel(value)
        }
      },
      mark: 'Marca',
      model: 'Modelo',
      stock: {
        label: 'Quantidade em estoque',
        getter(value) {
          if (isNaN(value)) {
            return '∞'
          }

          const stock = Number(value)

          return `${stock < 1 ? '∞' : stock}`
        }
      }
    }

    for (const key in productPropertiesKeyMap) {
      const productPropertyKeyValue = productPropertiesKeyMap[key]
      const productPropertyKey = key as ProductPropertyKey

      if (
        product &&
        typeof product[productPropertyKey] !== typeof undefined &&
        !!product[productPropertyKey]
      ) {
        const productPropertyKeyLabel =
          typeof productPropertyKeyValue === 'string'
            ? productPropertyKeyValue
            : productPropertyKeyValue.label

        productProps[productPropertyKeyLabel] =
          typeof productPropertyKeyValue === 'string'
            ? product[productPropertyKey]
            : typeof productPropertyKeyValue.getter === 'function'
              ? productPropertyKeyValue.getter(product[productPropertyKey])
              : product[productPropertyKey]
      }
    }

    if (!product || Object.keys(productProps).length < 1) {
      return
    }

    return (
      <Content
        props={{
          ...productProps,
          ...productPropertiesToMap(product.properties)
        }}
      />
    )
  }
