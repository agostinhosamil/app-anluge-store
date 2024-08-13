import { NextRequest, NextResponse } from 'next/server'

export type MiddlewareActionProps = {
  request: NextRequest
  response: typeof NextResponse
  props: any
}

export type MiddlewareAction = (props: MiddlewareActionProps) => any

export type Middleware = {
  [key: string]: MiddlewareAction | Middleware
}
