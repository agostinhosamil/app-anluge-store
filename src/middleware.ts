import { NextRequest, NextResponse } from 'next/server'

import { AppMiddlewareMathKey } from 'Types/AppMiddleware'
import { middlewares } from '~/middlewares'

const allowedOrigins = [
  'https://www.anluge.com',
  'https://anluge.com',
  'https://blog.anluge.com',
  'https://app-anluge-store.vercel.app'
]

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export const middleware = async (request: NextRequest) => {
  const requestUrl = request.nextUrl.pathname.toLocaleLowerCase()

  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      'x-current-page-url': request.nextUrl.toString(),
      'x-app-origin': request.nextUrl.origin.toString(),
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }

  // Handle simple requests
  const response = NextResponse.next()

  response.headers.set('x-current-page-url', request.nextUrl.toString())
  response.headers.set('x-app-origin', request.nextUrl.origin.toString())

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  if (middlewares.length >= 1) {
    const shouldApplyMiddleware = (
      middlewareMatchKey: AppMiddlewareMathKey
    ): boolean =>
      Boolean(
        middlewareMatchKey instanceof RegExp
          ? middlewareMatchKey.test(requestUrl)
          : middlewareMatchKey === requestUrl
      )

    for (const { handler, match } of middlewares) {
      const middlewareKeyMatch =
        match instanceof RegExp ? match.exec(requestUrl) : requestUrl

      if (shouldApplyMiddleware(match)) {
        handler({ request, response: NextResponse, match: middlewareKeyMatch })
      }
    }
  }

  return response
}

// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {

//   return response
// }

export const config = {
  matcher: '/(api|dashboard|me)/:path*'
}
