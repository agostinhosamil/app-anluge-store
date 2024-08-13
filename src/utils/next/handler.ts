import { NextApiHandler } from 'Types/next'

type NextApiHandlerArg = NextApiHandler | NextApiHandler<any>

export type NextApiHandlerFactory = <
  TNextApiHandler extends NextApiHandlerArg | object = NextApiHandler
>(
  apiHandler: TNextApiHandler extends NextApiHandlerArg
    ? TNextApiHandler
    : NextApiHandler<TNextApiHandler>
) => NextApiHandler

export const handler: NextApiHandlerFactory =
  apiHandler => async (request, options) => {
    return await apiHandler(request, options)
  }
