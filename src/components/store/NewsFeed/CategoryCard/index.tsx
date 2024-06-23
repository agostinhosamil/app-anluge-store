import Link from 'next/link'

import { CategoryProps } from '~/Types/Category'
import { resolveCategoryImageUrl } from '~/utils'
import { CategoryCardBody, CategoryDataWrapper, Container } from './styles'

type CategoryCardProps = CategoryProps

export const CategoryCard: React.FunctionComponent<
  CategoryCardProps
> = props => {
  return (
    <Container>
      <Link href={`/categories/${props.slag}?ref=news-feed`}>
        <CategoryCardBody>
          <CategoryDataWrapper>
            <div
              style={{
                backgroundImage: `url("${resolveCategoryImageUrl(props)}")`
              }}
            />
            <data>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </data>
          </CategoryDataWrapper>
        </CategoryCardBody>
      </Link>
    </Container>
  )
}
