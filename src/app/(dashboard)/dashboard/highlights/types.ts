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

export type HighlightCategoryInput = {
  category: string | Array<string>
}

export type HighlightProductInput = {
  product: string | Array<string>
}

export type HighlightInput = HighlightCategoryInput | HighlightProductInput

export type HighlightsContextDataObject = {
  highlights: Highlights

  addHighlight: (highlight: HighlightInput) => Promise<boolean>
  removeHighlight: (highlightId: HighlightInput) => Promise<boolean>
}
