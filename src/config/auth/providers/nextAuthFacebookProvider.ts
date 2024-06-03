import NextAuthFacebookProvider from 'next-auth/providers/facebook'

export const nextAuthFacebookProvider = NextAuthFacebookProvider({
  clientId: String(process.env.FACEBOOK_APP_CLIENT_ID),
  clientSecret: String(process.env.FACEBOOK_APP_CLIENT_SECRET)
})
