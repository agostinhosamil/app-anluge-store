import { AppMiddleware } from 'Types/AppMiddleware'

// import { auth } from '~/utils/auth'

export const APIRoutesNonGetMethodMiddleware: AppMiddleware = {
  match: /^(\/api\/(.+))/i,
  handler: async () => {
    // console.log(
    //   '[APIRoutesNonGetMethodMiddleware] Method -> ',
    //   request.method,
    //   '\nMatch => ',
    //   match
    // )
    // const requestMethod = request.method
    // const publicMethodsRe = /^(get)$/i
    // if (publicMethodsRe.test(requestMethod)) {
    //   return
    // }
    // const signInData = await auth()
    // if (!signInData) {
    //   return response.json(
    //     {
    //       error: 'Unauthenticated'
    //     },
    //     {
    //       status: 401
    //     }
    //   )
    // }
  }
}
