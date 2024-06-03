import { KeyRewriteMap } from '~/utils/dashboard/excelFileDataToJson/types'

export const stylusMapKeyRewriteMap: KeyRewriteMap = {
  Código: 'code',
  EAN: 'ean',
  Designação: 'name',
  Status: 'status',
  Campanha: 'promotionStatus',
  null: 'promotionDiscount',
  'Data fim campanha': 'promotionEnd',
  Embalagem: 'package',
  Modelo: 'model',
  Grupo: 'group',
  Família: 'family',
  'Sub Família': 'subFamily',
  Marca: 'mark',
  'Quant. a encomendar': 'stock',
  'Valor Total': 'totalPrice'
}
