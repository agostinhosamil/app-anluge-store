import { Header } from 'partners@components/Header'
import { LayoutProps } from 'Types/next'

import 'partners@styles/application.css'

export default function PartnersPagesLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full">
      <Header />
      {children}
    </div>
  )
}
