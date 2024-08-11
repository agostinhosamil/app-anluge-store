import { Col, Row } from 'react-bootstrap'
import { path } from '~/utils'

export const PartnersCallToActionSection = () => {
  return (
    <section className="about-partners-section">
      <div className="section-body">
        <form
          method="post"
          action={path('api', 'contact')}
          className="w-fill block"
        >
          <div className="about-partners-section-content">
            <div className="section-title-container">
              <i>Entrar em contacto</i>
              <h1>
                Torne-se <b>parceiro/a</b> da Anluge
              </h1>
            </div>
            <div className="w-full max-w-3xl m-auto flex flex-col gap-4">
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full pt-3 pb-[18px] px-3 text-white font-sans text-2xl bg-zinc-900 border-2 border-solid outline-none border-zinc-700 rounded-lg"
                  />
                </Col>
              </Row>
              <Row className="gap-y-6">
                <Col md={6}>
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    className="w-full pt-3 pb-[18px] px-3 text-white font-sans text-2xl bg-zinc-900 border-2 border-solid outline-none border-zinc-700 rounded-lg"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    placeholder="Seu endereço de email"
                    className="w-full pt-3 pb-[18px] px-3 text-white font-sans text-2xl bg-zinc-900 border-2 border-solid outline-none border-zinc-700 rounded-lg"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea
                    rows={5}
                    placeholder="Seu nome"
                    className="w-full resize-none overflow-hidden pt-3 pb-[18px] px-3 text-white font-sans text-2xl bg-zinc-900 border-2 border-solid outline-none border-zinc-700 rounded-lg"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <button
                    type="submit"
                    className="w-full p-3 font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg border-2 outline-none border-solid border-blue-600"
                  >
                    Enviar
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
