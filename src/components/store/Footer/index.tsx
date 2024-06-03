import React from 'react'
import Column from 'react-bootstrap/Col'
import BootstrapContainer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {
  FaFacebook,
  FaHeadphones,
  FaInstagram,
  FaMoneyCheck,
  FaTruck,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import { stringifyCompanyTaxData } from '~/utils'
import {
  CompanyDataWrapper,
  Container,
  FooterMenuListsWrapper,
  NewsletterFormContainer,
  ServiceDetails
} from './styles'

const companyTaxData = [
  'Anluge - Comércio e Prestação de serviços (SU), Lda',
  {
    label: 'nif',
    value: '5000829938'
  },
  {
    label: 'localização',
    value: 'Luanda - Kinaxixi, Rua comandante Kwenha, Casa Nº 092'
  }
]

export const Footer: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <ServiceDetails>
        <BootstrapContainer>
          <ul>
            <li>
              <div>
                <i>
                  <FaTruck />
                </i>
              </div>
              <data>
                <strong>Entregas rápidas</strong>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti itaque odio soluta.
                </span>
              </data>
            </li>
            <li>
              <div>
                <i>
                  <FaHeadphones />
                </i>
              </div>
              <data>
                <strong>Atendimento 24/24</strong>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti itaque odio soluta.
                </span>
              </data>
            </li>
            <li>
              <div>
                <i>
                  <FaMoneyCheck />
                </i>
              </div>
              <data>
                <strong>Garantias de devolução</strong>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti itaque odio soluta.
                </span>
              </data>
            </li>
          </ul>
        </BootstrapContainer>
      </ServiceDetails>
      <Container>
        <BootstrapContainer>
          <NewsletterFormContainer>
            <h1>Receba nossa promoções em primeira mão</h1>
            <p>
              Gostaria de ser um dos primeiros a saber os produtos em promoção
              ou em alta na nossa loja? Então, considere se inscrever na nossa
              newsletter para estar a frente e sempre se manter atualizado.
            </p>
            <form method="post" action="/">
              <div>
                <input
                  type="text"
                  placeholder="Seu melhor endereço de email"
                  name="newsletter[email]"
                  id="newsletter-user-email"
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button type="submit" role="button">
                  Inscrever-se
                </button>
              </div>
            </form>
          </NewsletterFormContainer>
          <Row>
            <Column lg={4}>
              <CompanyDataWrapper>
                <i>
                  <Image
                    src="/anluge-logo-light-h.png"
                    alt="Anluge"
                    width={190}
                    height={60}
                  />
                </i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae tempora pariatur possimus, voluptatem quasi
                  explicabo recusandae nostrum corporis veritatis.
                </p>
                <p>geral@anluge.com</p>
                <p>+244 923 234 344</p>
                <p>+244 982 456 556</p>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/anluge.ao">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/anluge.ao">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/anluge.ao">
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/anluge.ao">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </CompanyDataWrapper>
            </Column>
            <Column lg={8}>
              <FooterMenuListsWrapper>
                <Row>
                  <Column sm={3}>
                    <h4>Empresa</h4>
                    <ul>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Empresa</h4>
                    <ul>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Empresa</h4>
                    <ul>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Empresa</h4>
                    <ul>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre nós</Link>
                      </li>
                    </ul>
                  </Column>
                </Row>
                <Row>
                  <Column sm="12">
                    <ol>
                      <li>
                        <Link href="/terms">Termos de serviço</Link>
                      </li>
                      <li>
                        <Link href="/terms">Uso de cookies</Link>
                      </li>
                      <li>
                        <Link href="/terms">Política de privacidade</Link>
                      </li>
                      <li>
                        <Link href="/terms">Pagamentos</Link>
                      </li>
                    </ol>
                  </Column>
                </Row>
              </FooterMenuListsWrapper>
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <div className="company-tax-data">
                <span>{stringifyCompanyTaxData(companyTaxData)}</span>
              </div>
            </Column>
          </Row>
        </BootstrapContainer>
      </Container>
    </React.Fragment>
  )
}
