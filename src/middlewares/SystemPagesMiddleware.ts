import { AppMiddleware } from '~/Types/AppMiddleware'
// import { auth } from '~/utils/auth'
// import { getAuthTokenCookie } from '~/utils/authTokenCookie'
// import { userIs } from '~/utils/models/user'

export const SystemPagesMiddleware: AppMiddleware = {
  match: /^(\/dashboard\/system)/i,
  handler: async ({ request, response }) => {
    // const authData = await auth({
    //   token: getAuthTokenCookie()
    // })
    // console.log({ authData, token: getAuthTokenCookie() })
    // if (!authData || !userIs(authData.user, 'admin:master')) {
    //   console.log('No able to do this')
    // }
  }
}
