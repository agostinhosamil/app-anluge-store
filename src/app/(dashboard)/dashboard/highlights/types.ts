import { Prisma } from '@prisma/client'

export type Highlights = {
  products: Array<HighlightProduct>
  categories: Array<HighlightCategory>
}

export type HighlightCategory = Prisma.HighlightGetPayload<{
  include: {
    category: {
      select: {
        id: true
        title: true
        slag: true
        banner: true
      }
    }
  }
}>

export type HighlightProduct = Prisma.HighlightGetPayload<{
  include: {
    product: {
      select: {
        id: true
        name: true
        slag: true
        medias: {
          take: 1
        }
      }
    }
  }
}>

export type SingleHighlightCategoryInput = {
  category: string
}

export type MultipleHighlightCategoryInput = {
  categories: Array<string>
}

export type HighlightCategoryInput =
  | SingleHighlightCategoryInput
  | MultipleHighlightCategoryInput

export type SingleHighlightProductInput = {
  product: string
}

export type MultipleHighlightProductInput = {
  products: Array<string>
}

export type HighlightProductInput =
  | SingleHighlightProductInput
  | MultipleHighlightProductInput

export type HighlightInput = HighlightCategoryInput | HighlightProductInput

export type HighlightsContextDataObject = {
  highlights: Highlights

  addHighlight: (highlight: HighlightInput) => Promise<boolean>
  removeHighlight: (highlight: HighlightInput) => Promise<boolean>
}
