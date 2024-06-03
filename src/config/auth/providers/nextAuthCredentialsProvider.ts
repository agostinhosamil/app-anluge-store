import NextAuthCredentialsProvider from 'next-auth/providers/credentials'

import { authenticateUser } from '~/utils/auth'

export const nextAuthCredentialsProvider = NextAuthCredentialsProvider({
  name: 'Credentials',

  credentials: {
    username: {
      label: 'username',
      type: 'text'
    },
    password: {
      label: 'password',
      type: 'password'
    }
  },

  async authorize(credentials, req) {
    return await authenticateUser({
      password: '',
      username: ''
    })
  }
})
