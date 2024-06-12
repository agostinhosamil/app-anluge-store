import { ProductProps } from 'Types/Product'

export type ProductImage = {
  id: number | string
  file: File | null
  fileUrl?: string
}

export type ProductImages = Array<ProductImage>

export type ProductImagesFactory = (
  quantity?: number,
  data?: ProductProps
) => ProductImages
