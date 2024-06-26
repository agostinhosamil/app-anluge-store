import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
import { getAllCategoriesChildren } from '~/utils/newsFeed'
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

  // const categoriesTree = categoryListToTree(
  //   await getAllCategoriesChildren(categories)
  // )

  // categoriesTree.filter(category =>
  //   categoriesSlagsPrefixes.includes(
  //     generateSlagByTitleWithoutSignature(category.title)
  //   )
  // )

  console.log('>>> categories: ', categories)

  return <HomePage categories={categories} />
}
