import { Fragment } from 'react'

// import { Header } from 'institution@components/Header'
import { LayoutProps } from '~/Types/next'

export default async function InstitutionPagesLayout(props: LayoutProps) {
  return (
    <Fragment>
      {/* <Header /> */}
      {props.children}
    </Fragment>
  )
}
