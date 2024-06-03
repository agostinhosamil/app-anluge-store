import { Container } from './styles'

type MassCreationFormQuicGuideProps = {}

type MassCreationFormQuicGuideComponent =
  React.FunctionComponent<MassCreationFormQuicGuideProps>

export const CategoryMassCreationFormQuicGuide: MassCreationFormQuicGuideComponent =
  () => {
    return (
      <Container>
        <h1>Formulário de criação em massa</h1>
        <p>
          Nesse guia poderá obter informações que lhe permitirão registar as
          categorias ao sistema de uma forma bastante prática poupando seu tempo
          e dinamizando bastante o trabalho.
        </p>
        <h2>Subtitle here</h2>
      </Container>
    )
  }
