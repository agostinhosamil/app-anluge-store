import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { ProductProps } from '~/Types/Product'
import { categoryIncludeFactory } from '~/utils/category'
import { getCategoryChildren } from '~/utils/newsFeed'
import { productIncludeFactory } from '~/utils/product'

type ProductSiblingsProps = {
  product: ProductProps
}

export const maxDuration = 60

export const ProductSiblings = async (props: ProductSiblingsProps) => {
  const category: CategoryProps | null = await prisma.category.findUnique({
    where: {
      id: props.product.id
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
    return null
  }

  const productCategory = await getCategoryChildren(category)

  // getCategoryFromList(
  //   props.product.categoryId || '<<non-existing-category>>',
  //   categoryListToTree(categories)
  // )

  return (
    <Row>
      <Column md={12}>
        <CategoryProductsList
          flatListProps={{
            itemsCountPerIteration: 15,
            placeholderCountOnLoading: 15
          }}
          category={productCategory}
          title="Mais produtos da categoria $0"
        />
      </Column>
    </Row>
  )
}
