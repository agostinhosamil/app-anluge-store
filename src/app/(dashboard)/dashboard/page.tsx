'use client'

import { Fragment } from 'react'

import { ContentHeader } from 'dashboard@components/ContentHeader'

// import { Editor } from '@components/Form/RichTextField/test'

export default function DashboardPage() {
  return (
    <Fragment>
      <ContentHeader title="Painel administrador" />
      <h1 className="block mb-3 font-medium text-zinc-600 text-lg">Home</h1>
      {/* <Editor /> */}
    </Fragment>
  )
}
