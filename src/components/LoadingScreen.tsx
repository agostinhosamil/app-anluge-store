import { Spinner } from 'react-bootstrap'

import { LoadingScreen as Container } from './styled'

type LoadingScreenProps = {
  show?: boolean
}

type LoadingScreenComponent = React.FunctionComponent<
  React.PropsWithChildren & LoadingScreenProps
>

export const LoadingScreen: LoadingScreenComponent = props =>
  !props.show ? null : (
    <Container>
      <Spinner />
      {props.children || 'A carregar...'}
    </Container>
  )
