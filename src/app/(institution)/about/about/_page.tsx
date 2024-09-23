import { AppWindowIcon, EyeIcon } from 'lucide-react'
import Link from 'next/link'

import Image from '@components/Image'
import { PageSectionWrapper } from '@components/PageSectionWrapper'
import { ContactForm } from 'institution@components/ContactForm'
// import { ProductCard } from 'institution@components/ProductCard'
import { range } from '~/utils'

import softWareEngineerImage from './images/software-engineer.jpeg'
import { ProductsListWrapper } from './ProductsListWrapper'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-10 pb-16">
      <PageSectionWrapper>
        <div className="text-zinc-900 dark:text-zinc-300 w-full p-8">
          <i className="uppercase font-light text-zinc-300 dark:text-zinc-300">
            Quem somos
          </i>
          <h1 className="font-extrabold md:text-4xl lg:text-5xl block py-3">
            Uma empresa de prestação de serviços tecnológicos para empresas.
          </h1>
          <p className="lg:text-lg">
            Somos uma empresa de direito Angolano no sector Tecnológico. Uma
            equipe jovem, dinâmica e extremamente organizada, de profissionais
            eficientes e dispostos a contribuir para o desenvolvimento do país.
            <br />
            Soluções tecnológicas é o nosso forte, agregando a isso, a venda de
            consumíveis de escritório. Oferecemos soluções de ponta, mediante
            necessidade dos nossos clientes de acordo com a sua dimensão e
            exigências.
            <br />
            Temos como principal meta a satisfação de cada cliente que nos
            chega. Por isso é que dos nossos serviços de tecnologia,
            nomeadamente programação, computação em nuvem, consultoria em TI,
            desenvolvemos um projeto personalizado para cada cliente que nos
            chega.
            <br />
            Com uma equipe altamente qualificada e tecnologia de última geração,
            estamos sempre prontos para proporcionar a si melhores soluções em
            tecnologia. Seja no trabalho ou lazer, temos o que precisa para
            tornar a sua vida mais fácil e produtiva.
          </p>
        </div>
      </PageSectionWrapper>

      <PageSectionWrapper>
        <div className="w-full py-3 px-8 flex flex-row gap-2">
          <div className="flex flex-col max-w-64 py-8 md:py-14 lg:py-20 items-center">
            <strong className="text-2xl lg:text-4xl pr-0 lg:pr-5 text-zinc-800 dark:text-zinc-200">
              Saiba mais um pouco sobre as nossas soluções
            </strong>
          </div>
          <ul className="w-full flex flex-row items-center flex-wrap">
            {range(6).map(i => (
              <li key={i} className="inline-flex w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="w-full flex flex-col gap-6 justify-center items-center bg-blue-700 text-zinc-50 py-14 px-8 border-[1px] border-solid border-blue-800 rounded-xl relative">
                  <i className="size-14 bg-blue-600 rounded-lg relative [&>svg]:-ml-4 text-5xl">
                    <AppWindowIcon size={59} />
                  </i>
                  <strong className="text-lg md:text-2xl lg:text-3xl text-center">
                    Desenvolvimento de websites
                  </strong>
                  <p className="w-full line-clamp-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque delectus totam illo quibusdam laboriosam id minima
                    ipsa veritatis autem harum maxime possimus alias adipisci ut
                    tenetur, iste quaerat? Commodi, aliquam. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Atque delectus totam
                    illo quibusdam laboriosam id minima ipsa veritatis autem
                    harum maxime possimus alias adipisci ut tenetur, iste
                    quaerat? Commodi, aliquam.
                  </p>
                  <div className="w-full flex flex-row gap-2 justify-center items-center">
                    <button
                      type="button"
                      className="size-12 border-0 outline-none rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-400 text-zinc-50"
                    >
                      <EyeIcon />
                    </button>
                    <button
                      type="button"
                      className="py-[12px] px-5 border-0 outline-none rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 text-zinc-800 dark:text-zinc-50"
                    >
                      Contratar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSectionWrapper>

      <PageSectionWrapper>
        <div className="w-full flex flex-col md:items-center md:flex-row gap-5 px-8">
          <div className="max-w-lg">
            <Image
              src={softWareEngineerImage.src}
              alt="Software Engineer"
              className="rounded-xl w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-4 dark:text-zinc-300">
            <h3 className="text-lg md:text-2xl lg:text-4xl dark:font-extrabold">
              Soluções Tecnológicas Sob Medida para o Sucesso da Sua Empresa
            </h3>
            <p className="flex flex-col lg:text-xl">
              Transforme o Potencial da Sua Empresa com Tecnologia de Ponta.
              <br />
              Somos especialistas em criar soluções tecnológicas personalizadas
              que impulsionam o crescimento e a eficiência do seu negócio.
              Independentemente do tamanho ou setor da sua empresa, nossa equipe
              qualificada está pronta para desenvolver, integrar e proteger seus
              sistemas, garantindo que você esteja sempre um passo à frente da
              concorrência.
            </p>
          </div>
        </div>
      </PageSectionWrapper>

      <div className="w-full my-8 bg-gradient-to-r from-indigo-400 to-cyan-400 py-24 px-10 md:px-[10%] lg:px-[20%] text-center flex flex-col gap-5 items-center">
        <PageSectionWrapper>
          <div className="w-full flex flex-col py-9 md:py-20 gap-5 items-center">
            <h3 className="text-lg md:text-3xl lg:text-5xl font-extrabold text-white">
              Somos uma empresa líder no ramo tecnológico em Angola
            </h3>
            <p className="font-medium text-zinc-700 lg:text-xl">
              Nos orgulhamos de ser uma empresa líder no ramo tecnológico em
              Angola. Com uma profunda compreensão das necessidades locais e uma
              visão global, estamos à frente na entrega de soluções inovadoras e
              personalizadas que impulsionam o crescimento e a competitividade
              das empresas angolanas. Nossa expertise no mercado angolano nos
              permite oferecer serviços tecnológicos de ponta que fazem a
              diferença para negócios de todos os tamanhos e setores.
            </p>
            <ol className="w-full flex flex-row gap-4 justify-center">
              <li>
                <button
                  type="button"
                  role="button"
                  className="outline-none border-0 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 hover:scale-105 transition-transform py-3 px-5 text-zinc-50"
                >
                  Entrar em contacto
                </button>
              </li>
            </ol>
          </div>
        </PageSectionWrapper>
      </div>

      <PageSectionWrapper>
        <div className="w-full flex flex-col md:items-center md:flex-row gap-5 px-8">
          <div className="w-full flex flex-col gap-4 dark:text-zinc-300">
            <h3 className="text-lg md:text-2xl lg:text-4xl dark:font-extrabold">
              Por Que Escolher a Anluge?
            </h3>
            {/* <p className="flex flex-col lg:text-xl">
              Com uma vasta experiência acumulada ao longo de anos de atuação no
              mercado, nossa equipe de profissionais altamente qualificados se
              mantém atualizada com as mais recentes tendências e inovações
              tecnológicas. Oferecemos soluções personalizadas que se alinham
              perfeitamente às necessidades específicas do seu negócio, sempre
              com um compromisso inabalável em ser parceiros dedicados ao
              sucesso da sua empresa, prontos para oferecer o suporte necessário
              em cada etapa do seu crescimento.
            </p> */}
          </div>
          <div className="max-w-lg">
            <Image
              src={softWareEngineerImage.src}
              alt="Software Engineer"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </PageSectionWrapper>

      <PageSectionWrapper>
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
      </PageSectionWrapper>

      {/* <PageSectionWrapper>
        <div className="w-full flex px-8 flex-col gap-5">
          <h2 className="text-center dark:font-extrabold uppercase dark:text-zinc-50 md:text-3xl lg:text-5xl">
            Produtos recomendados
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center">
            {range(30).map(i => (
              <ProductCard key={i} />
            ))}
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
      </PageSectionWrapper> */}

      <PageSectionWrapper>
        <div className="w-full flex px-8 flex-col gap-5">
          <h2 className="text-center dark:font-extrabold uppercase dark:text-zinc-50 md:text-3xl lg:text-5xl">
            Entre em contacto para chegarmos a melhor solução para o seu negócio
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center">
            <ContactForm />
          </div>
        </div>
      </PageSectionWrapper>
    </div>
  )
}
