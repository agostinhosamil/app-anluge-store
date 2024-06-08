import { Title } from 'store@styles/product-page'

import { ProductProps } from '~/Types/Product'
import { ProductFAQ } from './ProductFAQ'
import { Container, List, ViewListButtonWrapper } from './styles'

type ProductFAQsProps = {
  product: ProductProps
}

export const ProductFAQs: React.FunctionComponent<ProductFAQsProps> = props => {
  const faqs = props.product.faqs

  if (faqs && faqs.length < 1) {
    return null
  }

  return (
    <Container>
      <Title>Perguntas frequentes</Title>
      <List>
        {faqs.map(faq => (
          <ProductFAQ key={faq.id} faq={faq} />
        ))}
      </List>
      <ViewListButtonWrapper>
        <li>
          <button>Fazer uma pergunta</button>
        </li>
        <li>
          <button>Ver mais perguntas</button>
        </li>
      </ViewListButtonWrapper>
    </Container>
  )
}
