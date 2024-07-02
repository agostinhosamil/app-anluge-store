import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { getCategoryChildren } from '~/utils/newsFeed'
import { productIncludeFactory } from '~/utils/product'

type CategorySectionProps = {
  categoryTitle: string
}

type CategorySectionComponent = React.FunctionComponent<
  React.PropsWithChildren & CategorySectionProps
>

export const CategorySection: CategorySectionComponent = async props => {
  const categoryData = await prisma.category.findFirst({
    where: {
      slag: {
        startsWith: props.categoryTitle
      }
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

  if (!categoryData) {
    return null
  }

  const category: CategoryProps = await getCategoryChildren(categoryData)

  return <CategoryProductsList category={category} />
}
