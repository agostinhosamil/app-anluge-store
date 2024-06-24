'use client'

import React from 'react'
import Column from 'react-bootstrap/Col'
import BootstrapContainer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {
  FaFacebook,
  FaHeadphones,
  FaInstagram,
  FaLinkedin,
  FaMoneyCheck,
  FaTruck,
  FaWhatsapp
} from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import { Partial } from '~/components/Partial'
import { stringifyCompanyTaxData } from '~/utils'
import { NewsletterForm } from './NewsletterForm'
import {
  CompanyDataWrapper,
  Container,
  FooterMenuListsWrapper,
  ServiceDetails
} from './styles'

const companyTaxData = [
  'Anluge - Comércio e Prestação de serviços (SU), Lda',
  {
    label: 'nif',
    value: '5001083384'
  },
  {
    label: 'localização',
    value: 'Luanda - Kinaxixi, Rua comandante Kwenha'
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
                  Nossas entregas rápidas garantem que você receba seus pedidos
                  no menor tempo possível, sem abrir mão da qualidade e cuidado
                  no serviço
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
                  Estamos aqui para você a qualquer hora do dia ou da noite.
                  Nosso atendimento 24/24 garante suporte contínuo para resolver
                  suas dúvidas e oferecer assistência quando você mais precisa.
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
                  Oferecemos garantias sólidas de devolução para garantir sua
                  total satisfação. Se não estiver completamente feliz com seu
                  pedido, estamos aqui para fazer tudo certo.
                </span>
              </data>
            </li>
          </ul>
        </BootstrapContainer>
      </ServiceDetails>
      <Container>
        <BootstrapContainer>
          <NewsletterForm />
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
                  Somos uma empresa líder em soluções tecnológicas
                  personalizadas para empresas de todos os tamanhos e setores.
                  Nossa equipe especializada oferece uma ampla gama de serviços,
                  incluindo consultoria em TI, desenvolvimento de software sob
                  medida, integração de sistemas, segurança cibernética e
                  suporte técnico contínuo.
                </p>
                <p>inf.geral@anluge.com</p>
                <p>+244 928 250 640</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/solutionstecnology"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://ao.linkedin.com/company/ag-anluge-tech"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://wa.me/+244928250640"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://instagram.com/anlugeempresa"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </CompanyDataWrapper>
            </Column>
            <Column lg={8}>
              <FooterMenuListsWrapper>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                  <Column sm={3}>
                    <h4>Páginas</h4>
                    <ul>
                      <li>
                        <Link href="/">Página inicial</Link>
                      </li>
                      <li>
                        <Link href="/">Produtos</Link>
                      </li>
                      <li>
                        <Link href="/">Categorias</Link>
                      </li>
                      <li>
                        <Link href="/">Sobre</Link>
                      </li>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Aplicações</h4>
                    <ul>
                      <li>
                        <Link href="/">Marketplace</Link>
                      </li>
                      <li>
                        <Link href="/">Instituição</Link>
                      </li>
                      <li>
                        <Link href="/">Empresas / Parceiros</Link>
                      </li>
                      <li>
                        <Link href="/">Blog</Link>
                      </li>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Links úteis</h4>
                    <ul>
                      <li>
                        <Link href="/me/cart">Carrinho</Link>
                      </li>
                      <li>
                        <Link href="/me/favorites">Lista de desejos</Link>
                      </li>
                      <li>
                        <Link href="/me/orders">Meus pedidos</Link>
                      </li>
                      <li>
                        <Link href="/help">Central de ajuda</Link>
                      </li>
                      <Partial
                        isEither={['admin', 'admin:master', 'seller', 'editor']}
                      >
                        <li>
                          <Link href="/dashboard">
                            Ir ao painel administrador
                          </Link>
                        </li>
                      </Partial>
                    </ul>
                  </Column>
                  <Column sm={3}>
                    <h4>Empresa</h4>
                    <ul>
                      <li>
                        <Link target="_blank" href="/about">
                          Sobre nós
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="/about/mission">
                          Nossa missão
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="/about/vision">
                          Nossa visão
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="/about/values">
                          Nossos valores
                        </Link>
                      </li>
                    </ul>
                  </Column>
                </Row>
                <Row>
                  <Column sm="12">
                    <ol>
                      <li>
                        <Link href="/about/terms">Termos de serviço</Link>
                      </li>
                      <li>
                        <Link href="/about/cookies">Uso de cookies</Link>
                      </li>
                      <li>
                        <Link href="/about/privacy">
                          Política de privacidade
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/payments">Pagamentos</Link>
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
