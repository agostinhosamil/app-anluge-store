import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
import { getAllCategoriesChildren } from '~/utils/newsFeed'
import { productIncludeFactory } from '~/utils/product'
import { HomePage } from './HomePage'

type ContentProps = {
  categories?: Array<CategoryProps>
}

type ContentComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentProps
>

export const maxDuration = 60

export const Content: ContentComponent = async () => {
  const categoriesNames = [
    'Servidores e Storage',
    'Impressão e Digitalização',
    'Equipamentos Energia',
    'Computadores, Monitor e POS'
  ]

  const categoriesSlagsPrefixes = categoriesNames.map(categoryName =>
    generateSlagByTitleWithoutSignature(categoryName)
  )

  const categories: Array<CategoryProps> = await getAllCategoriesChildren(
    await prisma.category.findMany({
      where: {
        OR: categoriesSlagsPrefixes.map(categoriesSlagsPrefix => ({
          slag: {
            startsWith: categoriesSlagsPrefix
          }
        }))
      },
      include: {
        categories: {
          include: categoryIncludeFactory()
        },
        products: {
          include: productIncludeFactory()
        }
      }
    })
  )

  return <HomePage categories={categories} />
}
