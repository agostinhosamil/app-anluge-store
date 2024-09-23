import { LayoutProps } from 'Types/next'

import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { WhatsappFloatingButton } from 'store@components/WhatsappFloatingButton'

export default async function StorePagesLayout({ children }: LayoutProps) {
  return (
    <div className="w-full flex flex-col h-auto">
      <Header />
      {children}
      <WhatsappFloatingButton />
      <Footer />
    </div>
  )
}
