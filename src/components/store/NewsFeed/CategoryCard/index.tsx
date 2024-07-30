import Link from 'next/link'

import { Category } from '@prisma/client'
import { CategoryProps } from '~/Types/Category'
import { resolveCategoryImageUrl } from '~/utils'
import { CategoryCardBody, CategoryDataWrapper, Container } from './styles'

type CategoryCardProps = CategoryProps | Category

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
                backgroundImage: `url("${resolveCategoryImageUrl(props, 'banner@small')}")`
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
