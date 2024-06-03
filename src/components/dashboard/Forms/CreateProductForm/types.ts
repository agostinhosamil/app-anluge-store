export type ProductImage = {
  id: number
  file: File | null
}

export type ProductImages = Array<ProductImage>

export type ProductImagesFactory = (quantity?: number) => ProductImages
