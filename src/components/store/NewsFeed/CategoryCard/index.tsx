import Link from 'next/link'
import { CategoryCardBody, CategoryDataWrapper, Container } from './styles'

type CategoryCardProps = {
  title: string
  description: string
  slug?: string
}

export const CategoryCard: React.FunctionComponent<CategoryCardProps> = (props) => {
  return (
    <Container>
      <Link href="/catogories/929883">
        <CategoryCardBody>
          <CategoryDataWrapper>
            <h1>
              {props.title}
            </h1>
            <p>
              {props.description}
            </p>
          </CategoryDataWrapper>
        </CategoryCardBody>
      </Link>
    </Container>
  )
}
