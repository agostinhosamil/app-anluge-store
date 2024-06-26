import 'bootstrap/dist/css/bootstrap.min.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NextJsTopLoader from 'nextjs-toploader'

import { GlobalStyles } from '@styles/rootLayout'
import { auth } from '@utils/auth'
import { getCartData } from '@utils/cart'
import { AuthenticationWrapper } from '~/components/AuthenticationWrapper'
import StyledComponentsRegistry from './lib/registry'

import { ApplicationContextProvider } from '~/components/ApplicationContext'
import { StoreContextWrapper } from '~/components/store/Context/StoreContextWrapper'
import { getAuthTokenCookie } from '~/utils/authTokenCookie'
import { getServerHeaders } from '~/utils/server'

export const generateMetadata = (): Metadata => {
  const serverHeaders = getServerHeaders()

  const origin = String(serverHeaders['x-app-origin'])

  return {
    metadataBase: URL.canParse(origin) ? new URL(origin) : undefined,
    title: {
      default: 'Anluge',
      template: '%s | Anluge'
    },
    icons: ['/assets/images/logo-primary.svg'],
    description:
      'Seja bem vindo a loja online da Anluge - Comércio e Prestação de Serviços'
  }
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
  const headers = getServerHeaders()

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
          <ApplicationContextProvider headers={headers}>
            <AuthenticationWrapper auth={authenticatedUser}>
              <StoreContextWrapper cart={cartData}>
                {children}
              </StoreContextWrapper>
            </AuthenticationWrapper>
          </ApplicationContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
