import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'

import { UnderConstructionFallback } from '~/components/UndeConstructionFallback'

export default function HomePage() {
  return (
    <div className="w-full block">
      <Header />
      <UnderConstructionFallback />
      <Footer />
    </div>
  )
}
