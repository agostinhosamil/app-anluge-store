import { LoadingStockMap } from '~/Types/Product'
import { kasperskyStockMapLoader } from './kaspersky'
import { microsoftStockMapLoader } from './microsoft'
import { stylusStockMapLoader } from './stylus'

export const stockMapLoaders = {
  [LoadingStockMap.STYLUS]: stylusStockMapLoader,
  [LoadingStockMap.KASPERSKY]: kasperskyStockMapLoader,
  [LoadingStockMap.MICROSOFT]: microsoftStockMapLoader
}
