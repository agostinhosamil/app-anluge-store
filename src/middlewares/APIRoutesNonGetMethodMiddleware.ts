import { AppMiddleware } from 'Types/AppMiddleware'

export const APIRoutesNonGetMethodMiddleware: AppMiddleware = {
  match: /^(\/api\/(.+))/i,
  handler: ({ request, match }) => {
    // console.log('Method -> ', request.method, '\nMatch => ', match)
  }
}
