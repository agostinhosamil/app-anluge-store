import { ServiceListItem } from './ServiceListItem'

const services = [
  {
    title: 'Desenvolvimento',
    description:
      'Desenvolvimento e licenciamento de programas de computador customizáveis'
  },
  {
    title: 'Impressão',
    description: `
      Serviços especializados de impressão para atender às suas
      necessidades diversas. Seja para materiais promocionais,
      educacionais, ou qualquer outro fim, nossa equipe experiente
      e equipamentos de última geração garantem resultados de alta
      qualidade e precisão.
    `
  },
  {
    title: 'Consultoria',
    description: `
      Consultoria em tecnologia da informação para ajudar sua
      empresa a navegar pelo complexo cenário digital com
      confiança e eficácia. Nossa equipe de especialistas em TI
      possui o conhecimento e a experiência necessários para
      oferecer insights valiosos e soluções sob medida que
      impulsionam o crescimento e a inovação.
    `
  },
  {
    title: 'Suporte técnico',
    description: `
      Nossa equipe de especialistas em TI está pronta para lidar
      com uma variedade de necessidades, desde a resolução rápida
      de problemas técnicos até a manutenção preventiva de
      sistemas e redes. Independentemente do tamanho ou
      complexidade do seu ambiente de TI, estamos aqui para
      fornecer soluções rápidas, confiáveis e eficazes que
      minimizam interrupções e maximizam a produtividade.
    `
  },
  {
    title: 'Tratamento de dados',
    description: `
      Nosso serviço de tratamento de dados abrange desde a coleta
      e organização até a análise e interpretação, ajudando sua
      empresa a extrair insights valiosos e tomar decisões
      informadas. Com protocolos rigorosos de segurança e
      conformidade, garantimos a proteção e integridade dos seus
      dados em todas as etapas do processo.
    `
  },
  {
    title: 'Cartografia',
    description: `
      Nossos serviços de cartografia abrangem desde a coleta de
      dados geoespaciais até a criação de mapas personalizados e
      visualizações tridimensionais. Utilizando as mais recentes
      tecnologias de sensoriamento remoto e sistemas de informação
      geográfica (SIG), podemos capturar e analisar dados com
      precisão e eficiência.
    `
  }
]

export const ServicesSection = () => {
  return (
    <section className="about-services-section">
      <div className="section-body">
        <div className="about-services-section-content">
          <div className="title-container">
            <i>Nossos serviços</i>
            <div>
              <h2>Orgulhosos por trabalhar com as maiores empresas</h2>
              <p>
                O nosso compromisso com a excelência começa na escolha dos
                parceiros com quem trabalhamos. Estamos orgulhosos de afirmar
                que colaboramos com algumas das maiores e mais respeitadas
                empresas do mercado. Essa conquista não é apenas um testemunho
                de nossa expertise e qualidade de serviço, mas também reflete
                nossa abordagem meticulosa e criteriosa na seleção de parceiros.
              </p>
            </div>
          </div>
          <div className="services-list-wrapper">
            <ul>
              {services.map((service, index) => (
                <ServiceListItem key={index} service={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
