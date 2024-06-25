import { NextRequest, NextResponse } from 'next/server'
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

export type NextApiResponse = NextResponse | Promise<NextResponse>

export type NextApiHandler<Params = DefaultNextApiParams> = (
  request: NextRequest,
  props: NextApiProps<Params>
) => NextApiResponse
