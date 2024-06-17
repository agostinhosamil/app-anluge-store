'use client'

import { Fragment } from 'react'

import { ContentHeader } from 'dashboard@components/ContentHeader'

// import { Editor } from '@components/Form/RichTextField/test'

export default function DashboardPage() {
  return (
    <Fragment>
      <ContentHeader title="Painel administrador" />
      <h1>Home</h1>
      {/* <Editor /> */}
    </Fragment>
  )
}
