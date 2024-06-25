'use client'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { CartProps } from 'Types/Cart'
import { Container, LoadingScreen } from '~/components/styled'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { resolveProductImageUrl } from '~/utils'

import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BiSolidOffer } from 'react-icons/bi'
import {
  FaAngleLeft,
  FaArrowRightArrowLeft,
  FaPhone,
  FaTeamspeak
} from 'react-icons/fa6'
import { cancelOrder } from '~/utils/models/order'
import { redirect } from '~/utils/navigation'
import { reasons } from './reasons'
import {
  CancelLink,
  CheckOptionsGroup,
  CheckOptionsList,
  OptionalLink,
  OptionalLinksListWrapper,
  OrderItem,
  OrderItemsSliderWrapper,
  PageWrapper,
  Paragraph,
  SubmitButton,
  SubTitle,
  Title
} from './styles'

type ContentProps = {
  cart: CartProps
}

type ContentComponent = React.FunctionComponent<ContentProps>

export const Content: ContentComponent = props => {
  const [loading, setLoading] = useState<boolean>(false)

  const formSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    setLoading(true)

    const orderCanceled = await cancelOrder(props.cart.id)

    if (orderCanceled) {
      return redirect('/me/orders')
    }

    // TODO: handle this using custom alert/message box
    alert(
      'Perdão, algo correu mal ao processar o seu pedido... Tente novamente mais tarde'
    )

    setLoading(false)
  }

  return (
    <Container>
      {loading && (
        <LoadingScreen>
          <i>
            <Spinner />
          </i>
          <span>A cancelar o pedido...</span>
        </LoadingScreen>
      )}
      <PageWrapper>
        <form
          method="post"
          action={`/api/store/orders/${props.cart.id}/cancel`}
          onSubmit={event => formSubmitHandler(event)}
        >
          <Title>Que pena; estavas tão perto...!</Title>
          <Paragraph>
            Entendemos que às vezes surgem dúvidas ou imprevistos que podem
            levar você a reconsiderar sua compra. Queremos assegurar que estamos
            aqui para ajudar e tornar sua experiência conosco o mais tranquila
            possível. Se surgiram novas informações ou você simplesmente mudou
            de ideia, estamos prontos para oferecer assistência imediata. Nosso
            objetivo é garantir que cada cliente se sinta totalmente satisfeito
            com sua decisão de compra, e estamos comprometidos em resolver
            qualquer questão que possa ter surgido durante o processo de compra.
          </Paragraph>
          <CheckOptionsGroup>
            <strong>
              Por favor, ajude-nos a melhorar o que quer que esteja a faltar na
              nossa plataforma.
              <br />O que o levou a cancelar este pedido?
            </strong>
            <CheckOptionsList>
              {reasons.map((reason, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    name="cancel[reason]"
                    value={i}
                    id={`reason${i}`}
                  />
                  <label htmlFor={`reason${i}`}>
                    <i />
                    <span>{reason.title}</span>
                    <p suppressHydrationWarning>{reason.description}</p>
                  </label>
                </li>
              ))}
            </CheckOptionsList>
          </CheckOptionsGroup>
          <SubTitle>O que está a deixar para trás...</SubTitle>
          <OrderItemsSliderWrapper>
            <TouchSlider showButtons showIndicators>
              {props.cart.orders.map(order => (
                <Slide key={order.id}>
                  <OrderItem>
                    <div
                      style={{
                        backgroundImage: `url(${resolveProductImageUrl(order.product)})`
                      }}
                    />
                    <strong>{order.product.name}</strong>
                    <span>{order.quantity}</span>
                  </OrderItem>
                </Slide>
              ))}
            </TouchSlider>
          </OrderItemsSliderWrapper>
          <SubTitle>
            Se tiver a ver com algum problema ligado a plataforma ou aos nossos
            serviços, talvez possamos ajudar:
          </SubTitle>
          <OptionalLinksListWrapper>
            <Row>
              <Col md={4}>
                <OptionalLink href={''}>
                  <i>
                    <FaPhone />
                  </i>
                  <data>
                    <strong>Contactar apoio a cliente</strong>
                    <span>
                      Tire dúvidas sobre como usar a plataforma da melhor forma
                      possível.
                    </span>
                  </data>
                </OptionalLink>
              </Col>
              <Col md={8}>
                <OptionalLink href={''} $color="green">
                  <i>
                    <FaTeamspeak />
                  </i>
                  <data>
                    <strong>Negociar com a nossa equipe de vendas</strong>
                    <span>
                      Negocie possíveis descontos com a nossa equipe de vendas e
                      veja o que ainda podem fazer por si.
                    </span>
                  </data>
                </OptionalLink>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={7}>
                <OptionalLink href={''} $color="violet">
                  <i>
                    <BiSolidOffer />
                  </i>
                  <data>
                    <strong>Ofertas Exclusivas</strong>
                    <span>
                      Como forma de agradecimento pela sua preferência,
                      oferecemos ofertas exclusivas e descontos para que você
                      possa reconsiderar sua decisão.
                    </span>
                  </data>
                </OptionalLink>
              </Col>
              <Col md={5}>
                <OptionalLink href={''} $color="yellow">
                  <i>
                    <FaArrowRightArrowLeft />
                  </i>
                  <data>
                    <strong>Fazer troca de produtos</strong>
                    <span>
                      Se não tem certeza sobre o produto escolhido, podemos
                      ajudar a encontrar uma alternativa que atenda melhor às
                      suas necessidades.
                    </span>
                  </data>
                </OptionalLink>
              </Col>
            </Row>
          </OptionalLinksListWrapper>
          <Paragraph style={{ marginTop: '0px' }}>
            Não hesite em entrar em contato conosco através do nosso chat ao
            vivo ou pelo número [Inserir número de contato] para que possamos
            resolver qualquer dúvida ou preocupação que você tenha. Estamos aqui
            para tornar sua experiência de compra conosco excepcional.
          </Paragraph>
          <SubmitButton type="submit">Cancelar pedido</SubmitButton>
          <CancelLink href="/me/orders">
            <i>
              <FaAngleLeft />
            </i>
            <span>Voltar</span>
          </CancelLink>
        </form>
      </PageWrapper>
    </Container>
  )
}
