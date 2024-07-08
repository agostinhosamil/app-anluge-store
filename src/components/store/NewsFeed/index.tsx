import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Partial } from '@components/Partial'
import { Container } from '@components/styled'
import { range } from '~/utils'

import { AdvertisingPanel } from './AdvertisingPanel'
// import { CategoryListSlider } from './CategoryListSlider'
// import { CategoryProductsList } from './CategoryProductsList'
import Link from 'next/link'
import { LoginButton } from './LoginButton'
import { AdvertisingPanelContainer } from './styles'

export const NewsFeed: React.FunctionComponent<
  React.PropsWithChildren
> = props => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <div className="w-full h-full flex flex-col justify-center pt-[20px] pb-[10px] pr-[8px]">
            <Partial unAuth>
              <div className="w-full flex bg-zinc-200 rounded-2xl p-7 flex-col items-center justify-center gap-6 h-full">
                <p className="text-zinc-500 font-light text-sm text-center">
                  Junte-se à nossa comunidade de compras e desfrute de
                  benefícios exclusivos ao iniciar sessão ou criar uma conta
                  agora mesmo. Com apenas um clique, você pode conectar-se
                  através das suas contas do Google, Facebook ou Twitter,
                  tornando todo o processo simples e sem complicações.
                </p>
                <ul className="w-full pb-2 flex flex-row gap-2">
                  <li className="inline-flex w-full">
                    <LoginButton />
                  </li>
                  <li className="inline-flex w-full">
                    <Link
                      className="w-full px-4 py-2 rounded-xl bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white text-center font-bold border-none outline-none"
                      type="button"
                      href="/register?ref=home-page"
                    >
                      Criar conta
                    </Link>
                  </li>
                </ul>
                <div className="text-center flex flex-col gap-2">
                  <span>Acesso rápido com:</span>
                  <ol className="pt-2 w-full flex flex-row gap-3 justify-center">
                    <li className="inline-flex justify-center">
                      <button
                        type="button"
                        className="outline-none border-none bg-transparent"
                      >
                        <Image
                          width="30"
                          height="30"
                          src="/assets/images/social-media-icon-google.png"
                          alt="Iniciar sessão com Facebook"
                        />
                      </button>
                    </li>
                    <li className="inline-flex justify-center">
                      <button
                        type="button"
                        className="outline-none border-none bg-transparent"
                      >
                        <Image
                          width="30"
                          height="30"
                          src="/assets/images/social-media-icon-facebook.png"
                          alt="Iniciar sessão com Facebook"
                        />
                      </button>
                    </li>
                    <li className="inline-flex justify-center">
                      <button
                        type="button"
                        className="outline-none border-none bg-transparent"
                      >
                        <Image
                          width="30"
                          height="30"
                          src="/assets/images/social-media-icon-twitter.png"
                          alt="Iniciar sessão com Facebook"
                        />
                      </button>
                    </li>
                  </ol>
                </div>
              </div>
            </Partial>
          </div>
        </Col>
        <Col md={8}>
          <AdvertisingPanelContainer>
            <Carousel controls={false}>
              {range(1).map(i => (
                <Carousel.Item key={i}>
                  <AdvertisingPanel
                    image="image001.jpg"
                    title="Uma poderosa solução para proteger os ativos da sua empresa"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </AdvertisingPanelContainer>
        </Col>
      </Row>
      {props.children}
      {/* {categories.map(category => (
        <CategoryProductsList key={category.id} category={category} />
      ))} */}
    </Container>
  )
}
