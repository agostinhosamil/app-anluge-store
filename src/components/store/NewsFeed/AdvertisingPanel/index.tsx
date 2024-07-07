// import Image from 'next/image'
import Link from 'next/link'

import { Container } from './styles'

type AdvertisingPanelProps = {
  image: string
  title: string
}

export const AdvertisingPanel: React.FunctionComponent<
  AdvertisingPanelProps
> = props => {
  return (
    <Container>
      <Link href="/">
        <div className="block w-full">
          <img
            className="block w-full h-auto border-none outline-none"
            src={`/assets/images/uploads/${props.image}`}
            alt={props.title}
          />
        </div>
      </Link>
    </Container>
  )
}
