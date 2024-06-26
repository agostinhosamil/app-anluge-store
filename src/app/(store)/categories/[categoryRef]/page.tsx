import { prisma } from '@services/prisma'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { CategoryListSlider } from '~/components/store/NewsFeed/CategoryListSlider'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { getCategoryChildren } from '~/utils/newsFeed'
import { productIncludeFactory } from '~/utils/product'
import { Content } from './content'

type Params = {
  categoryRef: string
}

type CategoryPageProps = {
  params: Params
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // const category = await prisma.category.findFirst({
  //   where: {
  //     OR: [
  //       {
  //         id: params.categoryRef
  //       },
  //       {
  //         slag: params.categoryRef
  //       }
  //     ]
  //   }
  // })

  const category: CategoryProps | null = await prisma.category.findFirst({
    where: {
      OR: [
        {
          slag: params.categoryRef
        },
        {
          id: params.categoryRef
        }
      ]
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

  if (!category) {
    return <NotFoundPageContent />
  }
  // const foundCategory = categories.find(category => {
  //   return Boolean(
  //     category.id === params.categoryRef || category.slag === params.categoryRef
  //   )
  // })

  // if (!foundCategory) {
  //   return <NotFoundPageContent />
  // }

  // const category = getCategoryFromList(
  //   foundCategory.id,
  //   categoryListToTree(categories)
  // )

  // const otherCategories = categories.filter(
  //   ({ id }) => id !== foundCategory.id
  // )

  const categoryData = await getCategoryChildren(category)

  const otherCategories = await prisma.category.findMany({
    where: {
      id: {
        not: category.id
      }
    }
  })

  return (
    <Content category={categoryData}>
      <CategoryListSlider
        categories={otherCategories}
        title="Outras categorias"
      />
    </Content>
  )
}
