import { Footer } from 'partners@components/Footer'
import { Header } from 'partners@components/Header'
import { LayoutProps } from 'Types/next'

import 'partners@styles/application.css'

export default function PartnersPagesLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-50">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
