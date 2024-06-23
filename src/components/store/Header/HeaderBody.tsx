import { Container } from 'react-bootstrap'

import {
  HeaderBodyCol,
  HeaderBodyContainer,
  HeaderBodyRow,
  HeaderDataWrapper
} from './styles'

import { HeaderSlider } from './HeaderSlider'

export const HeaderBody = () => {
  return (
    <HeaderBodyContainer>
      <Container>
        <HeaderBodyRow>
          <HeaderBodyCol className="home-page-description">
            <HeaderDataWrapper>
              <h1>Anluge - Comércio e Prestação de Serviços</h1>
              <p>Tecnologia - Inovação - Serviços</p>
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
