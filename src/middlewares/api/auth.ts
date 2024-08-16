import { auth as getSignInData } from '@utils/auth'
import { MiddlewareActionProps } from 'Types/api'

export const auth = {
  jwt: async ({ response, request }: MiddlewareActionProps) => {
    const authorizationHeader = request.headers.get('Authorization')
    const authToken = String(authorizationHeader).replace(/^(Bearer\s+)/i, '')
    const signInData = await getSignInData({
      token: authToken
    })

    if (!signInData) {
      return response.json(
        {
          status: 'error',
          error: 'unauthenticated',
          message: 'not authenticated'
        },
        {
          status: 401
        }
      )
    }
  },

  vendor: {
    oAuth: () => {
      console.log('oAuth middleware applied')
    }
  }
}
