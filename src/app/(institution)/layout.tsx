import { Fragment } from 'react'

import { LayoutProps } from 'Types/next'
import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { WhatsappFloatingButton } from 'store@components/WhatsappFloatingButton'

export default async function InstitutionPagesLayout(props: LayoutProps) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <WhatsappFloatingButton />
      <Footer />
    </Fragment>
  )
}
