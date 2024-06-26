import { CategoryProps } from '~/Types/Category'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
import { categoryListToTree } from '~/utils/models/category'
import { getAllCategories } from '~/utils/newsFeed'
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

  // console.log(
  //   'OR => ',
  //   categoriesSlagsPrefixes.map(categoriesSlagsPrefix => ({
  //     slag: {
  //       startsWith: categoriesSlagsPrefix
  //     }
  //   }))
  // )

  const categories: Array<CategoryProps> = await getAllCategories()

  // await prisma.category.findMany({
  //   where: {
  //     OR: categoriesSlagsPrefixes.map(categoriesSlagsPrefix => ({
  //       slag: {
  //         startsWith: categoriesSlagsPrefix
  //       }
  //     }))
  //   },
  //   include: {
  //     categories: {
  //       include: categoryIncludeFactory()
  //     },
  //     products: {
  //       include: productIncludeFactory()
  //     }
  //   }
  // })

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
