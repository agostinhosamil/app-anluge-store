import { PropertyProps } from 'Types/Property'

import { ProductsProperties, Properties } from './types'

export const getProductsProperties = (
  productsProperties: ProductsProperties
): Array<Array<PropertyProps>> => {
  return Object.keys(productsProperties).map(productId => {
    const productProperties = productsProperties[productId]

    const product = productProperties.product

    const getPropertyChildren = (
      propertyChildren: Properties
    ): Array<PropertyProps> => {
      if (!propertyChildren) {
        return []
      }

      return Object.keys(propertyChildren).map(
        (productPropertyKey): PropertyProps => {
          const productProperty = propertyChildren[productPropertyKey]

          const productPropertyHasNotChildren = (
            productPropertyValue: typeof productProperty
          ): productPropertyValue is string => {
            return Boolean(typeof productPropertyValue === 'string')
          }

          return {
            id: -1,
            key: productPropertyKey,
            value: productPropertyHasNotChildren(productProperty)
              ? productProperty
              : null,
            parentId: null,
            productId: product.code,
            properties: productPropertyHasNotChildren(productProperty)
              ? []
              : getPropertyChildren(productProperty),
            type: 'STRING'
          }
        }
      )
    }

    return getPropertyChildren(productProperties.props)
  })
}
