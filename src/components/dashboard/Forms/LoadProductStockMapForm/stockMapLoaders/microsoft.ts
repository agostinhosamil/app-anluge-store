import { StockMapLoader } from '~/Types/Product'

type MicrosoftStockMapData = {
  // TODO: Define it
}

type MicrosoftStockMapFormat = Array<MicrosoftStockMapData>

export const microsoftStockMapLoader: StockMapLoader<
  MicrosoftStockMapFormat
> = mapData => {
  console.log('Loading microsoft stock map', mapData)

  return {
    categories: [],
    products: []
  }
}
