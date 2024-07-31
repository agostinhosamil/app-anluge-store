import 'bootstrap/dist/css/bootstrap.min.css'

import '@styles/globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NextJsTopLoader from 'nextjs-toploader'

import { GlobalStyles } from '@styles/rootLayout'
import { auth } from '@utils/auth'
import { getCartData } from '@utils/cart'
import { AuthenticationWrapper } from '~/components/AuthenticationWrapper'
import StyledComponentsRegistry from './lib/registry'

import { AdvertiseContextWrapper } from '@components/AdvertiseContext'
import { ApplicationContextProvider } from '@components/ApplicationContext'
import { StoreContextWrapper } from '@components/store/Context/StoreContextWrapper'
import { getAuthTokenCookie } from '@utils/authTokenCookie'
import { getServerHeaders } from '@utils/server'
import { Toaster } from 'ui@components/toaster'

import companyData from '~/config/cache/company-data/index.json'

export const generateMetadata = (): Metadata => {
  const serverHeaders = getServerHeaders()

  const origin = String(serverHeaders['x-app-origin'])

  return {
    metadataBase: URL.canParse(origin) ? new URL(origin) : undefined,
    title: {
      default: 'Anluge',
      template: '%s | Anluge'
    },
    icons: ['/assets/images/svg/anluge-logo-dark.svg'],
    description:
      'A Anluge, uma empresa angolana de destaque, é a sua parceira ideal para soluções tecnológicas personalizadas. Na Anluge, oferecemos uma vasta gama de serviços que atendem empresas de todos os tamanhos e setores. Nossa equipe especializada está pronta para oferecer consultoria em TI, desenvolvimento de software sob medida, integração de sistemas, segurança cibernética e suporte técnico contínuo. Conte com a Anluge para levar sua empresa ao próximo nível com inovação e excelência.',
    openGraph: {
      type: 'website',
      alternateLocale: 'pt-PT',
      siteName: 'Anluge',
      title: 'Anluge - Comércio e Prestação de Serviços',
      description:
        'A Anluge, uma empresa angolana de destaque, é a sua parceira ideal para soluções tecnológicas personalizadas. Na Anluge, oferecemos uma vasta gama de serviços que atendem empresas de todos os tamanhos e setores. Nossa equipe especializada está pronta para oferecer consultoria em TI, desenvolvimento de software sob medida, integração de sistemas, segurança cibernética e suporte técnico contínuo. Conte com a Anluge para levar sua empresa ao próximo nível com inovação e excelência.',
      countryName: 'Angola',
      emails: companyData.emailAddresses,
      url: origin,
      locale: 'pt-PT',
      phoneNumbers: companyData.phoneNumbers,
      images: [
        {
          width: 200,
          height: 200,
          url: `/anluge-logo.jpg`,
          alt: 'Anluge - Comércio e Prestação de Serviços',
          type: 'image/jpeg'
        }
      ]
    }
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
          <AdvertiseContextWrapper>
            <ApplicationContextProvider headers={headers}>
              <AuthenticationWrapper auth={authenticatedUser}>
                <StoreContextWrapper cart={cartData}>
                  {children}
                </StoreContextWrapper>
              </AuthenticationWrapper>
            </ApplicationContextProvider>
          </AdvertiseContextWrapper>
          <Toaster />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
