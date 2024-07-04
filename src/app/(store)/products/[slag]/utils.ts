import { PropertyMap } from 'store@components/ProductPage/ProductDetailsTable/types'
import { PropertyProps } from 'Types/Property'

export const productPropertiesToMap = (
  productProperties: Array<PropertyProps | any>
): PropertyMap => {
  const props: PropertyMap = {}

  for (const productProperty of productProperties) {
    const productPropertyValue =
      productProperty.properties instanceof Array &&
      productProperty.properties.length >= 1
        ? productPropertiesToMap(productProperty.properties)
        : productProperty.value

    if (productPropertyValue) {
      props[productProperty.key] = productPropertyValue
    }
  }

  return props
}
