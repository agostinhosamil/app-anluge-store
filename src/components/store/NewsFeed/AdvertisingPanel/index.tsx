import Image from 'next/image'
import Link from 'next/link'

import { Container } from './styles'

type AdvertisingPanelProps = {
  image: string
  title: string
}

export const AdvertisingPanel: React.FunctionComponent<AdvertisingPanelProps> = (props) => {
  return (
    <Container>
      <Link href="/">
        <div>
          <Image src={`/assets/images/uploads/${props.image}`} alt={props.title} width={1200} height={820} />
        </div>
      </Link>
    </Container>
  )
}
