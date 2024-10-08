import { User } from '@prisma/client'
import { jwtVerify } from 'jose'
import { sign } from 'jsonwebtoken'
import { cookies } from 'next/headers'

import { getAuthTokenCookie } from '@utils/authTokenCookie'
import { userIncludeFactory } from '@utils/user'
import { Hash } from '~/helpers/Hash'
import { prisma } from '~/services/prisma'
import { UserProps } from '~/Types/UserProps'
import { noEmpty } from '~/utils'

import { AuthUtil, SignInRequestProps, SignInResponse } from './types'

const DEFAULT_AUTH_PROPS = {
  token: ''
}

type JWTPayloadData = {
  user: User
}

export const auth: AuthUtil = async (props = DEFAULT_AUTH_PROPS) => {
  // const session = await getServerSession(authOptions)

  // if (session && session.user) {
  //   return session.user as User
  // }

  const authenticationToken = noEmpty(props.token)
    ? props.token
    : getAuthTokenCookie()

  try {
    const textEncode = new TextEncoder()

    const jwtSecret = textEncode.encode(
      String(process.env.JSON_WEB_TOKEN_SECRET)
    )

    const authenticationData = await jwtVerify<JWTPayloadData>(
      authenticationToken,
      jwtSecret
    )

    const jwtPayloadData = authenticationData.payload

    const authenticatedUser = await prisma.user.findFirst({
      where: {
        id: String(jwtPayloadData.user.id)
      },

      include: userIncludeFactory()
    })

    if (authenticatedUser) {
      return {
        user: {
          ...authenticatedUser,
          password: '<<hidden>>'
        },
        token: authenticationToken
      }
    }
  } catch (e) {
    // console.log('\n\n\n\n\nError => ', e)
  }
}

export const authenticateUser = async (
  credentials: SignInRequestProps
): Promise<UserProps | null> => {
  if (typeof credentials !== 'object') {
    return null
  }

  const { username, password } = credentials

  const registeredUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username
        },
        {
          email: username
        },
        {
          phone: username
        }
      ]
    },
    include: userIncludeFactory()
  })

  if (registeredUser) {
    const registeredUserPassword = registeredUser.password

    const rightPasswordProvided = await Hash.compare(
      password,
      registeredUserPassword
    )

    if (rightPasswordProvided) {
      return {
        ...registeredUser,
        password: '<<hidden>>'
      }
    }
  }

  return null
}

export const generateUserAuthenticationToken = (user: UserProps): string => {
  const jwtPayload = {
    user: {
      id: user.id
    }
  }

  // const textEncoder = new TextEncoder()
  // const jwtSecret = textEncoder.encode(
  //   String(process.env.JSON_WEB_TOKEN_SECRET)
  // )

  const token = sign(jwtPayload, String(process.env.JSON_WEB_TOKEN_SECRET), {
    expiresIn: '5h'
  })

  // const token = await new EncryptJWT(jwtPayload)
  //   .setExpirationTime('5h')
  //   .setIssuedAt(new Date(Date.now()))
  //   .setProtectedHeader({ alg: 'HS256', enc: 'A128CBC-HS256' })
  //   .encrypt(jwtSecret)
  return token
}

export const signIn = async (
  props: SignInRequestProps
): Promise<SignInResponse | undefined> => {
  const user = await authenticateUser(props)

  if (user) {
    const token = generateUserAuthenticationToken(user)

    return {
      user,
      token
    }
  }
}

export const signOut = async (): Promise<void> => {
  cookies().set({
    name: String(process.env.APP_AUTH_COOKIE_NAME),
    value: 'null',
    path: '/'
  })
}

export const isUserAuthenticated = async (): Promise<boolean> => {
  const authTokenCookie = getAuthTokenCookie()

  try {
    const authenticatedUser = await auth({
      token: authTokenCookie
    })

    return Boolean(authenticatedUser)
  } catch (err) {
    return false
  }
}
