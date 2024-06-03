import { StockMapLoader } from '~/Types/Product'

type KasperskyStockMapData = {
  // TODO: Define it
}

type KasperskyStockMapFormat = Array<KasperskyStockMapData>

export const kasperskyStockMapLoader: StockMapLoader<
  KasperskyStockMapFormat
> = mapData => {
  console.log('Loading kaspersky stock map', mapData)

  return {
    categories: [],
    products: []
  }
}
