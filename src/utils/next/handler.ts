import { NextApiHandler } from 'Types/next'

export type NextApiHandlerFactory = (
  apiHandler: NextApiHandler
) => NextApiHandler

export const handler: NextApiHandlerFactory =
  apiHandler => async (request, options) => {
    return await apiHandler(request, options)
  }
