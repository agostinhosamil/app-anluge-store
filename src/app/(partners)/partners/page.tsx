import { Fragment } from 'react'

import { ServicesSection } from 'partners@components/Sections/Services'
import { StaticCounter } from '~/components/StaticCounter'

export default async function PartnersHomePage() {
  return (
    <Fragment>
      <section className="about-company-section">
        <div className="section-body">
          <div className="about-company-section-content">
            <div className="image-wrapper">
              <div>
                <img
                  src="/assets/partners/images/Empresa-de-TI_pq-768x512.webp"
                  alt="Some cool image is here"
                />
              </div>
            </div>
            <div className="body">
              <i>sobre nós</i>
              <h2>
                Mais de 7 anos de experiência desenvolvendo e realizando
                projectos
              </h2>
              <p>
                Entendemos que cada empresa é única, com desafios e objetivos
                distintos. É por isso que adotamos uma abordagem personalizada
                para cada cliente, trabalhando em estreita colaboração para
                entender suas necessidades específicas e fornecer soluções que
                realmente agregam valor ao seu negócio. Com uma equipe de
                especialistas altamente qualificados e apaixonados pela
                tecnologia, estamos prontos para enfrentar qualquer desafio e
                transformar suas visões em realidade.
              </p>
              <br />
              <p>
                Não importa o tamanho ou setor de sua empresa, estamos aqui para
                ajudá-lo a crescer e prosperar em um mundo digital em constante
                mudança. Deixe a [Nome da Empresa] ser seu parceiro de confiança
                na jornada rumo ao sucesso. Juntos, vamos alcançar novos
                horizontes e conquistar grandes realizações. O futuro da sua
                empresa começa aqui.
              </p>
              <ol>
                <li>
                  <data>
                    <strong>
                      +
                      <StaticCounter value={3451} />
                    </strong>
                    <span>Clientes satisfeitos</span>
                  </data>
                </li>
                <li>
                  <data>
                    <strong>
                      +<StaticCounter value={549059} />
                    </strong>
                    <span>Projectos realizados</span>
                  </data>
                </li>
                <li>
                  <data>
                    <strong>
                      +<StaticCounter value={24} />
                    </strong>
                    <span>Serviços na nossa carteira</span>
                  </data>
                </li>
              </ol>
              <div>
                <a href="#">Ler mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="about-projects-section">
        <div className="section-body">
          <div className="about-projects-section-content">
            <div className="section-title-container">
              <i>Portfolio</i>
              <h1>
                Veja por si mesmo, nossos resultados em{' '}
                <b>projetos anteriores</b>
              </h1>
            </div>
            <div className="projects-list-wrapper">
              <ul>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00000.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00001.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00002.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00003.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00005.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="project-card">
                    <a href="#">
                      <div>
                        <img
                          src="/assets/partners/images/project-screenshot-00004.png"
                          alt="Project title here"
                        />
                        <data>
                          <span>Categoria do project / Segmento</span>
                          <strong>Titulo do projecto</strong>
                        </data>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-partners-section">
        <div className="section-body">
          <div className="about-partners-section-content">
            <div className="section-title-container">
              <i>Parceiros</i>
              <h1>
                Trabalhamos com os <b>melhores no mercado</b>
              </h1>
            </div>
            <ul>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000000.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000001.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000002.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000003.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000004.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/partners/images/partner-000005.png"
                    alt="partners-logo-0000"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-partners-section">
        <div className="section-body">
          <div className="about-partners-section-content">
            <div className="section-title-container">
              <i>Entrar em contacto</i>
              <h1>
                Torne-se <b>parceiro/a</b> da Anluge
              </h1>
            </div>
            AA
          </div>
        </div>
      </section>

      <section className="about-hiring-banner-section">
        <div className="section-body">
          <div className="about-hiring-banner-section-content">
            <div
              className="banner"
              style={{
                backgroundImage: `url('/assets/partners/images/banner-0000.png')`
              }}
            >
              <i>Carreiras</i>
              <h2>Gostaria de fazer parte da nossa equipe?</h2>
              <a href="#">Veja vagas abertas</a>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-body">
          <div className="blog-section-content">
            <div className="section-title-container">
              <i>Blog</i>
              <h1>
                Últimos artigos, notícias e <b>destaques</b>
              </h1>
            </div>
            <div className="blog-posts-list">
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>
                      presidente da república visita obras do parque de ciência
                      e tecnologia
                    </h3>
                    <p>
                      O Presidente da República, João Lourenço, efectou hoje uma
                      visita de trabalho ao local onde está a ser construído o
                      Parque de Ciência e Tecnologia de Angola. O Parque que
                      fica concluído em Agosto do próximo ano, surge com o
                      objectivo de dinamizar a ciência e investigação
                      tecnológica no país. O projecto prevê a construção de 9
                      novos edifícios entre Centros de Investigação,
                      instituições de ensino superior, empresas e o executivo.
                      Mais informações com o jornalista Manuel Esperança. Clique
                      no áudio abaixo e ouça:
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-content-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/assets/partners/images/header-banner-000.jpg"
                      alt="Post title"
                    />
                  </div>
                  <div className="post-data">
                    <i>Há dois dias</i>
                    <h3>Titulo do post aqui ficaria</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Modi dolorem sit voluptate laborum repellendus magni
                      molestias quo maxime neque natus officia ea praesentium
                      mollitia, voluptatem ab quod dolor rerum perferendis.
                    </p>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
