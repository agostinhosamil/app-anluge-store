import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import NextJsTopLoader from 'nextjs-toploader'

import { GlobalStyles } from '@styles/rootLayout'
import { auth } from '@utils/auth'
import { AuthenticationWrapper } from '~/components/AuthenticationWrapper'
import StyledComponentsRegistry from './lib/registry'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'

export const metadata: Metadata = {
  title: 'Anluge',
  icons: ['/assets/images/logo-primary.svg'],
  description:
    'Seja bem vindo a loja online da Anluge - Comércio e Prestação de Serviços'
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

const roboto = Roboto({
  weight: ['100', '300', '500', '700', '900'],
  subsets: ['latin', 'cyrillic']
})

export default async function RootLayout({ children }: RootLayoutProps) {
  const authTokenCookie = cookies().get(
    String(process.env.APP_AUTH_COOKIE_NAME)
  )

  const authenticatedUser = await auth({
    token: (authTokenCookie && authTokenCookie.value) || ''
  })

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg"
          href="/assets/images/svg/anluge-logo-dark.svg"
          sizes="20x20"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/svg/anluge-logo-dark.svg"
          type="image/svg"
          sizes="20x20"
        />
      </head>
      <body className={roboto.className}>
        <NextJsTopLoader />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AuthenticationWrapper auth={authenticatedUser}>
            {children}
          </AuthenticationWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
