import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
import { categoryListToTree } from '~/utils/models/category'
import { productIncludeFactory } from '~/utils/product'
import { HomePage } from './HomePage'

export default async function Home() {
  const categoriesNames = [
    'Servidores e Storage',
    'Impressão e Digitalização',
    'Equipamentos Energia',
    'Computadores, Monitor e POS'
  ]

  const categoriesSlagsPrefixes = categoriesNames.map(categoryName =>
    generateSlagByTitleWithoutSignature(categoryName)
  )

  const categories: Array<CategoryProps> = await prisma.category.findMany({
    include: {
      categories: {
        include: categoryIncludeFactory()
      },
      products: {
        include: productIncludeFactory()
      }
    }
  })

  const categoriesTree = categoryListToTree(categories)

  return (
    <HomePage
      categories={categoriesTree.filter(category =>
        categoriesSlagsPrefixes.includes(
          generateSlagByTitleWithoutSignature(category.title)
        )
      )}
    />
  )
}
