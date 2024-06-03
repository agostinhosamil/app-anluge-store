import { LoadingStockMap } from 'Types/Product'
import { kasperskyMapKeyRewriteMap } from './kaspersky'
import { microsoftMapKeyRewriteMap } from './microsoft'
import { stylusMapKeyRewriteMap } from './stylus'

export const mapKeyRewriteMaps = {
  [LoadingStockMap.STYLUS]: stylusMapKeyRewriteMap,
  [LoadingStockMap.MICROSOFT]: microsoftMapKeyRewriteMap,
  [LoadingStockMap.KASPERSKY]: kasperskyMapKeyRewriteMap
}
