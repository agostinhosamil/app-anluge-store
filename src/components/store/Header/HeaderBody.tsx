import { Container } from 'react-bootstrap'

import {
  HeaderBodyCol,
  HeaderBodyContainer,
  HeaderBodyRow,
  HeaderDataWrapper,
  HeaderSearchBoxWrapper
} from './styles'

import { HeaderSearchBox } from '~/components/HeaderSearchBox'
import { HeaderSlider } from './HeaderSlider'

export const HeaderBody = () => {
  return (
    <HeaderBodyContainer>
      <Container>
        <HeaderBodyRow>
          <HeaderBodyCol className="home-page-description">
            <HeaderDataWrapper>
              <h1>Anluge - Comércio e Prestação de Serviços</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                sit illo nulla adipisci quibusdam reprehenderit dolorum quaerat
                odit necessitatibus tenetur! At repudiandae magni in aliquid
                veritatis impedit repellendus velit officiis!
              </p>
              <HeaderSearchBoxWrapper>
                <HeaderSearchBox expandOnFocus={false} />
              </HeaderSearchBoxWrapper>
            </HeaderDataWrapper>
          </HeaderBodyCol>
          <HeaderBodyCol>
            <HeaderSlider />
          </HeaderBodyCol>
        </HeaderBodyRow>
      </Container>
    </HeaderBodyContainer>
  )
}
