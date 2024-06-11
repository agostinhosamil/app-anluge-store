import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NextJsTopLoader from 'nextjs-toploader'

import { GlobalStyles } from '@styles/rootLayout'
import { auth } from '@utils/auth'
import { getCartData } from '@utils/cart'
import { AuthenticationWrapper } from '~/components/AuthenticationWrapper'
import StyledComponentsRegistry from './lib/registry'

import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreContextWrapper } from '~/components/store/Context/StoreContextWrapper'
import { getAuthTokenCookie } from '~/utils/authTokenCookie'
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
  const authTokenCookie = getAuthTokenCookie()
  const cartData = await getCartData()

  const authenticatedUser = await auth({
    token: (authTokenCookie && authTokenCookie) || ''
  })

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/svg"
          href="/assets/images/svg/anluge-logo-dark.svg"
          sizes="20x20"
        />
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
        <NextJsTopLoader showSpinner={false} />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AuthenticationWrapper auth={authenticatedUser}>
            <StoreContextWrapper cart={cartData}>
              {children}
            </StoreContextWrapper>
          </AuthenticationWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
