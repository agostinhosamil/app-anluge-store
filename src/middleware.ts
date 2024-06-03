import { NextRequest, NextResponse } from 'next/server'

import { AppMiddlewareMathKey } from 'Types/AppMiddleware'
import { middlewares } from '~/middlewares'

export const middleware = async (request: NextRequest) => {
  const response = NextResponse

  const requestUrl = request.nextUrl.pathname.toLocaleLowerCase()

  if (!(middlewares.length >= 1)) {
    return
  }

  const shouldApplyMiddleware = (
    middlewareMatchKey: AppMiddlewareMathKey
  ): boolean =>
    Boolean(
      middlewareMatchKey instanceof RegExp
        ? middlewareMatchKey.test(requestUrl)
        : middlewareMatchKey === requestUrl
    )

  for (const { handler, match } of middlewares) {
    if (shouldApplyMiddleware(match)) {
      handler({ request, response })
    }
  }
}
