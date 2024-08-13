import { PathInternal } from '~/Types/eager'
import { auth } from './auth'

export const apiMiddlewares = {
  auth
}

export type ApiMiddlewares = typeof apiMiddlewares

export type ApiMiddleware = PathInternal<ApiMiddlewares>
