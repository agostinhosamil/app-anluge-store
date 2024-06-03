import Image from 'next/image'

import { StarRating } from './StarRating'
import { Aside, Container, Content, Description, ImageWrapper, Name, StatsData } from './styles'

type ProductCardProps = {
  name: string
  image: string
  description: string
}

export const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  return (
    <Container>
      <Content>
        <ImageWrapper>
          <Image src={props.image} alt={props.name} width={210} height={250} />
        </ImageWrapper>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <StatsData>
          <div>
            <StarRating value={0} />
          </div>
          <div>
            <span>+123 unidades vendisdas</span>
          </div>
        </StatsData>
      </Content>
      <Aside>
        Ma
      </Aside>
    </Container>
  )
}
