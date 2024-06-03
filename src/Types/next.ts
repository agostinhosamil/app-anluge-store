import React from 'react'

export type LayoutProps = {
  children: React.ReactNode
  params: any
}

export type DefaultNextApiParams = {
  [key: string]: string
}

export type NextApiProps<Params = DefaultNextApiParams> = {
  params: Params
}
