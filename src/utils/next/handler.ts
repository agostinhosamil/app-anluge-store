import { NextResponse } from 'next/server'

import { NextApiHandler } from 'Types/next'
import { ApiMiddleware } from '~/middlewares/api'

import { handleMiddleware } from './handleMiddleware'

type NextApiHandlerArg = NextApiHandler | NextApiHandler<any>

type ApiHandler<TNextApiHandler> = TNextApiHandler extends NextApiHandlerArg
  ? TNextApiHandler
  : NextApiHandler<TNextApiHandler>

export type NextApiHandlerFactory = <
  TNextApiHandler extends NextApiHandlerArg | object = NextApiHandler
>(
  ...args:
    | [...apiMiddlewares: Array<ApiMiddleware>, ApiHandler<TNextApiHandler>]
    | [ApiHandler<TNextApiHandler>]
) => NextApiHandler

export const handler: NextApiHandlerFactory =
  (...args) =>
  async (request, props) => {
    const apiMiddlewares = args
      .slice(0, -1)
      .map(apiMiddleware => String(apiMiddleware))
    const apiHandler = args[-1 + args.length] as ApiHandler<NextApiHandlerArg>

    const response = NextResponse

    for (const apiMiddleware of apiMiddlewares) {
      const middlewareHandlerResponse = await handleMiddleware(
        apiMiddleware as ApiMiddleware,
        {
          request,
          response,
          props
        }
      )

      if (middlewareHandlerResponse instanceof NextResponse) {
        return middlewareHandlerResponse
      }
    }

    return await apiHandler(request, props)
  }
