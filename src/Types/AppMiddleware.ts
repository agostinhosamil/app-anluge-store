import { NextRequest, NextResponse } from 'next/server'

export type AppMiddlewareProps<Body = any> = {
  request: NextRequest
  response: typeof NextResponse<Body>
  match: RegExpExecArray | string | null
}

export type AppMiddlewareMathKey = string | RegExp

export type AppMiddlewareHandler<Body = any> = (
  props: AppMiddlewareProps<Body>
) => Promise<void> | void

export type AppMiddleware<Body = any> = {
  match: AppMiddlewareMathKey
  handler: AppMiddlewareHandler<Body>
}
