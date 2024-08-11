import { StaticCounter } from '~/components/StaticCounter'

export const AboutCompanySection = () => {
  return (
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
              Mais de 7 anos de experiência desenvolvendo e realizando projectos
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
                    +<StaticCounter value={130} />
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
  )
}
