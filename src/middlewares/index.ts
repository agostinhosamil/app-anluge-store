import { APIRoutesNonGetMethodMiddleware } from './APIRoutesNonGetMethodMiddleware'
import { SystemPagesMiddleware } from './SystemPagesMiddleware'

export const middlewares = [
  SystemPagesMiddleware,
  APIRoutesNonGetMethodMiddleware
]
