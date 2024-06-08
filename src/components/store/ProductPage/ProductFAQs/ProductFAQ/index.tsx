import { useState } from 'react'

import { Faq } from '@prisma/client'
import { Container } from './styles'

type ProductFAQProps = {
  faq: Faq
}

export const ProductFAQ: React.FunctionComponent<ProductFAQProps> = props => {
  const [showContent, setShowContent] = useState<boolean>(false)

  const clickHandler = () => {
    setShowContent(!showContent)
  }

  return (
    <Container>
      <strong onClick={clickHandler}>{props.faq.question}</strong>
      {showContent && <p>{props.faq.answer}</p>}
    </Container>
  )
}
