import NextAuthEmailProvider from 'next-auth/providers/email'

export const nextAuthEmailProvider = NextAuthEmailProvider({
  server: '//'
})
