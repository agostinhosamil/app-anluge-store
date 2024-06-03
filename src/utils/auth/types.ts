import { UserProps } from '~/Types/UserProps'

export type AuthUtilProps = {
  // request: NextApiRequest
  // response: NextApiResponse
  token: string
}

export type AuthUtilResponse = SignInResponse

export type SignInResponse = {
  user: UserProps
  token: string
}

export type SignInRequestProps = {
  username: string
  password: string
}

export type AuthUtil = (
  props?: AuthUtilProps
) => Promise<AuthUtilResponse | undefined>
