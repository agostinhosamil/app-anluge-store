import NextAuth from 'next-auth/next'

import { authOptions } from '~/config/auth'

const nextAuthHandler = NextAuth(authOptions)

export const GET = nextAuthHandler

export const POST = nextAuthHandler
