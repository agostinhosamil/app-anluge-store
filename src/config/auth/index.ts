import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { AuthOptions } from 'next-auth'

import { nextAuthCredentialsProvider } from './providers/nextAuthCredentialsProvider'
import { nextAuthEmailProvider } from './providers/nextAuthEmailProvider'
import { nextAuthFacebookProvider } from './providers/nextAuthFacebookProvider'
import { nextAuthGoogleProvider } from './providers/nextAuthGoogleProvider'
import { nextAuthTwitterProvider } from './providers/nextAuthTwitterProvider'

const prismaClient = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    nextAuthEmailProvider,
    nextAuthGoogleProvider,
    nextAuthTwitterProvider,
    nextAuthFacebookProvider,
    nextAuthCredentialsProvider
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },

    async session({ session, token }) {
      session = token.user as any

      return session
    }
  },
  pages: {
    newUser: '/register',
    signIn: '/login'
  }
}
