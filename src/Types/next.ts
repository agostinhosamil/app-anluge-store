import React from 'react'

export type LayoutProps<Params = DefaultNextApiParams> = {
  children: React.ReactNode
  params: Params
}

export type DefaultNextApiParams = {
  [key: string]: string
}

export type NextApiProps<Params = DefaultNextApiParams> = {
  params: Params
}
