import { NextRequest, NextResponse } from 'next/server'

import { NextApiProps } from 'Types/next'
import { ApiMiddleware, apiMiddlewares } from '~/middlewares/api'
import { MiddlewareAction } from '~/Types/api'
import { getObjectProp } from '~/utils'

type MiddlewareHandlerProps = {
  request: NextRequest
  response: typeof NextResponse
  props: NextApiProps
}

export const handleMiddleware = async (
  middlewareRef: ApiMiddleware,
  middlewareHandlerProps: MiddlewareHandlerProps
) => {
  const apiMiddleware = getObjectProp<MiddlewareAction>(
    middlewareRef,
    apiMiddlewares
  )

  if (apiMiddleware) {
    return await apiMiddleware(middlewareHandlerProps)
  }
}
