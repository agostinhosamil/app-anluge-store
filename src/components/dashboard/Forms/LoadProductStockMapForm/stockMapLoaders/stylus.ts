import { StockMapLoaderResponseDataObject } from '~/helpers/StockMapLoaderResponseDataObject'
import { StockMapLoader } from '~/Types/Product'
import { generateRandomId } from '~/utils'

type StylusStockMapData = {
  code: string
  ean: string
  name: string
  status: string
  promotionStatus: string
  promotionDiscount: number
  promotionEnd: number
  package: number
  model: string
  group: string
  family: string
  subFamily: string
  mark: string
  stock: any
  totalPrice: number
}

type StylusStockMapFormat = Array<StylusStockMapData>

export const stylusStockMapLoader: StockMapLoader<
  StylusStockMapFormat
> = stockMapProducts => {
  // const categories: Array<Category> = []
  // const products: Array<Product> = []

  const response = new StockMapLoaderResponseDataObject()

  /**
   * Todos:
   * - [] Import categories
   */
  // const categoryKeyNames: Array<keyof StylusStockMapData> = ['group', 'family', 'subFamily']

  for (const product of stockMapProducts) {
    const productGroup =
      response.findCategory(product.group) ||
      response.storeCategory(product.group)
    const productFamily =
      response.findCategory(product.family) ||
      response.storeCategory(product.family, {
        parentId: productGroup.id
      })
    const productSubFamily =
      response.findCategory(product.subFamily) ||
      response.storeCategory(product.subFamily, {
        parentId: productFamily.id
      })

    const now = new Date(Date.now())

    response.products.push({
      slag: '',
      barCode: product.ean,
      categoryId: productSubFamily.id,
      code: response.productExists(product.code)
        ? generateRandomId()
        : product.code,
      createdAt: now,
      updatedAt: now,
      description: `Imported product: ${product.name}`,
      id: 'product:id',
      name: product.name,
      price: 0,
      sku: generateRandomId(),
      stock: -1,
      summary: `Imported product: ${product.name}`,
      type: 'PHYSICAL'
    })
  }

  return response.data
}
