import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa6'

import Image from '@components/Image'
import { PageSectionWrapper } from '@components/PageSectionWrapper'
import companyData from '~/config/cache/company-data/index.json'
import { range } from '~/utils'

import softWareEngineerImage from './about/images/software-engineer.jpeg'
import tiTechSupport from './about/images/ti-tech-support-4.jpg'
import { ContactForm } from './ContactForm'
import { ProductsListWrapper } from './ProductsListWrapper'
import { ServiceListItem } from './ServiceListItem'

export default function About2Page() {
  return (
    <PageSectionWrapper>
      <div className="w-full flex flex-col gap-12 md:gap-28 py-12 md:py-28 px-5 md:px-8 lg:px-12">
        <div className="w-full block">
          <Row>
            <Col md={7} lg={6}>
              <div className="flex w-full flex-col gap-4 md:pr-10">
                <ul className="flex w-full flex-row gap-4 items-center [&_a]:text-zinc-800 dark:[&_a]:text-zinc-50 [&_a_svg]:transition-transform [&>svg]:hover:[&_a]:scale-125">
                  <li>
                    <a
                      href={companyData.socialMediaFacebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={companyData.socialMediaWhatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={companyData.socialMediaInstagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={companyData.socialMediaLinkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </li>
                </ul>
                <h1 className="w-full block font-extrabold text-zinc-800 dark:text-zinc-50 capitalize relative after:absolute after:w-full after:content-[''] after:h-5 after:-z-[1] after:block after:bottom-0 after:left-0 after:bg-blue-400 dark:after:bg-blue-700">
                  A sua parceira ideal para alavancar o seu negócio com soluções
                  inovadoras.
                </h1>
                <p className="w-full block text-sm md:text-lg lg:text-xl dark:text-zinc-300">
                  Somos uma empresa de direito Angolano no sector Tecnológico.
                  Uma equipe jovem, dinâmica e extremamente organizada, de
                  profissionais eficientes e dispostos a contribuir para o
                  desenvolvimento do país.
                </p>
                <ul className="flex w-full gap-3 items-center [&_a]:pt-3 [&_a]:pb-[14px] [&_a]:px-6 [&_a]:rounded-full [&_a]:bg-gradient-to-r [&_a]:from-indigo-400 [&_a]:to-cyan-400 [&_a]:text-zinc-50 [&_a]:flex [&_a]:flex-row [&_a]:gap-3 [&_a]:items-center [&_svg]:-mb-1.5">
                  <li>
                    <Link href="#">
                      <FaArrowRight />
                      <span>Saber Mais</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>Contacto</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <div className="w-full">
                <Image
                  className="w-full rounded-lg shadow-xl"
                  src={softWareEngineerImage.src}
                  alt="Software engineer"
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="w-full block">
          <Row>
            <Col md={5} lg={4}>
              <div className="w-full">
                <Image
                  className="w-full rounded-lg shadow-xl"
                  src={tiTechSupport.src}
                  alt="Software engineer"
                />
              </div>
            </Col>
            <Col md={7} lg={8}>
              <div className="flex w-full flex-col gap-4 md:pr-10">
                <h1 className="w-full block font-extrabold text-zinc-800 dark:text-zinc-50 capitalize relative after:absolute after:w-full after:content-[''] after:h-5 after:-z-[1] after:block after:bottom-0 after:left-0 after:bg-blue-400 dark:after:bg-blue-700">
                  Transforme Desafios em Oportunidades com Tecnologia
                  Personalizada e Suporte Especializado
                </h1>
                <p className="w-full block text-sm md:text-lg lg:text-xl dark:text-zinc-300">
                  Acreditamos que cada desafio empresarial é uma oportunidade
                  para inovar e crescer. Com nossa expertise em soluções
                  tecnológicas personalizadas, ajudamos sua empresa a superar
                  obstáculos e atingir novos patamares de sucesso.
                  <br />
                  Desenvolvemos estratégias sob medida que não apenas resolvem
                  problemas imediatos, mas também preparam sua organização para
                  o futuro. Desde a integração de sistemas até a segurança
                  cibernética e o desenvolvimento de software, oferecemos uma
                  abordagem completa e personalizada para atender às suas
                  necessidades específicas.
                  <br />
                  Além disso, nosso suporte especializado está sempre disponível
                  para garantir que você tenha o respaldo necessário em cada
                  etapa. Com a Anluge ao seu lado, transformar desafios em
                  oportunidades se torna uma realidade tangível, levando seu
                  negócio a um nível superior de eficiência e competitividade.
                </p>
                <ul className="flex w-full gap-3 items-center [&_a]:pt-3 [&_a]:pb-[14px] [&_a]:px-6 [&_a]:rounded-full [&_a]:bg-gradient-to-r [&_a]:from-indigo-400 [&_a]:to-cyan-400 [&_a]:text-zinc-50 [&_a]:flex [&_a]:flex-row [&_a]:gap-3 [&_a]:items-center [&_svg]:-mb-1.5">
                  <li>
                    <Link href="#">
                      <FaArrowRight />
                      <span>Saber Mais</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="w-full block text-center">
          <h2 className="max-w-4xl m-auto text-center dark:font-extrabold uppercase dark:text-zinc-50 md:text-3xl lg:text-5xl">
            O que podemos fazer pela sua empresa
          </h2>
          <p className="max-w-4xl mt-3 m-auto text-sm md:text-lg lg:text-lx text-zinc-600 dark:text-zinc-200">
            Oferecemos-lhe soluções tecnológicas e consultoria estratégicas.
            Pensando na melhoria e segurança da sua empresa, evitando ataques
            cibernéticos proveniente de qualquer lugar.
          </p>
          <ul className="w-full pt-10 flex flex-row flex-wrap">
            {range(15).map(i => (
              <ServiceListItem key={i} />
            ))}
          </ul>
        </div>

        <div className="w-full flex px-8 flex-col gap-5">
          <h2 className="text-center dark:font-extrabold uppercase dark:text-zinc-50 md:text-3xl lg:text-5xl">
            Produtos recomendados
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center">
            <ProductsListWrapper />
          </div>
          <div className="w-full flex flex-row justify-center py-3 md:py-5">
            <Link
              href="#"
              className="block pt-2 pb-[11px] px-5 bg-zinc-300 text-zinc-900 dark:bg-zinc-900 hover:scale-110 transition-transform dark:text-zinc-200 rounded-xl"
            >
              Visite a nossa loja
            </Link>
          </div>
        </div>

        <div className="w-full block">
          <ContactForm />
        </div>
      </div>
    </PageSectionWrapper>
  )
}
