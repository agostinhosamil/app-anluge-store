import { $Enums } from '@prisma/client'
import { StockMapLoaderResponseDataObject } from '~/helpers/StockMapLoaderResponseDataObject'
import { StockMapLoader } from '~/Types/Product'
import { generateRandomId, noEmpty } from '~/utils'

type StylusStockMapData = {
  code: string
  ean: string
  name: string
  status: string
  promotion: string
  promotionDiscount: number
  promotionEnd: string
  package: number
  model: string
  group: string
  family: string
  subFamily: string
  mark: string
  stock: any
  totalPrice: number
  price: number
}

type StylusStockMapFormat = Array<StylusStockMapData>

const resolveProductStatus = (status: string): $Enums.ProductStatus => {
  switch (status.toLowerCase()) {
    case 'disponível':
      return 'AVAILABLE'
    case 'trânsito':
      return 'TRANSIT'
    case 'sob consulta':
      return 'UPON_REQUEST'
    default:
      return 'AVAILABLE'
  }
}

const readDate = (date: string): Date => {
  const [day, month, year] = date.split('/')

  return new Date([month, day, year].join('/'))
}

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
        parentId: productGroup.slag
      })
    const productSubFamily =
      response.findCategory(product.subFamily) ||
      response.storeCategory(product.subFamily, {
        parentId: productFamily.slag
      })

    const now = new Date(Date.now())

    response.products.push({
      slag: '',
      barCode: product.ean,
      categoryId: productSubFamily.slag,
      code: response.productExists(product.code)
        ? generateRandomId()
        : product.code,
      createdAt: now,
      updatedAt: now,
      description: `Imported product: ${product.name}`,
      id: 'product:id',
      name: product.name,
      price: Number(product.price),
      sku: generateRandomId(),
      stock: -1,
      summary: `Imported product: ${product.name}`,
      type: 'PHYSICAL',
      mark: product.mark,
      model: product.model,
      minOrderQuantity: -1,
      promotion: false,
      promotionDiscount: product.promotionDiscount || 0,
      promotionEnd: noEmpty(product.promotionEnd)
        ? readDate(product.promotionEnd)
        : now,
      status: resolveProductStatus(product.status)
    })
  }

  return response.data
}
