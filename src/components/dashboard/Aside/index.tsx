import Image from 'next/image'

import { Partial } from '@components/Partial'

import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { AsideLink } from './AsideLink'
import { AsideSection } from './AsideSection'
import { Body, Container, DataWrapper, PhotoWrapper, UserCard } from './styles'

export const Aside = () => {
  const { auth } = useAuthenticationContext()

  if (!auth.user) {
    return null
  }

  return (
    <Container>
      <UserCard>
        <PhotoWrapper>
          <div>
            <Image
              src="/assets/images/uploads/user-avatar.jpg"
              alt="User name"
              width={55}
              height={55}
            />
          </div>
        </PhotoWrapper>
        <DataWrapper>
          <strong>{auth.user.name}</strong>
          <span>{auth.user.role.name}</span>
        </DataWrapper>
      </UserCard>
      <Body>
        <AsideSection title="Início">
          <AsideLink label="Página inicial" icon="FaHouse" href="/dashboard" />
          <Partial isEither={['admin', 'admin:master']}>
            <AsideLink
              label="Contas de utilizador"
              icon="FaUsers"
              href="/dashboard/users"
            />
            <AsideLink
              label="Administradores"
              icon="FaUserShield"
              href="/dashboard/admins"
            />
          </Partial>
        </AsideSection>

        <Partial isEither={['admin', 'admin:master', 'editor', 'seller']}>
          <AsideSection title="Marketplace">
            <AsideLink
              label="Categorias"
              icon="FaStore"
              href="/dashboard/categories"
            />
            <AsideLink
              label="Produtos"
              icon="FaProductHunt"
              href="/dashboard/products"
            />
            <AsideLink
              label="Anúncios"
              icon="FaAdversal"
              href="/dashboard/marketing/ads"
            />
          </AsideSection>
        </Partial>

        <AsideSection title="Blog">
          <AsideLink
            label="Publicações"
            icon="FaBlog"
            href="/dashboard/categories"
          />
          <AsideLink
            label="Criar nova publicação"
            icon="FaPlus"
            href="/dashboard/products"
          />
        </AsideSection>

        <Partial is={'admin:master'}>
          <AsideSection title="Autorizações">
            <AsideLink
              label="Roles"
              icon="FaUserLock"
              href="/dashboard/system/roles"
            />
            <AsideLink
              label="Permissions"
              icon="FaUserLock"
              href="/dashboard/system/permissions"
            />
          </AsideSection>
        </Partial>

        <AsideSection title="Instituição">
          <AsideLink label="Central de ajuda">
            <AsideLink label="Criar artigo" />
            <AsideLink label="Artigos" />
          </AsideLink>
          <AsideLink label="Documentos">
            <AsideLink label="Termos de serviço" />
            <AsideLink label="Política de privacidade" />
            <AsideLink label="Política de pagamentos" />
            <AsideLink label="Política de uso de cookies" />
            <AsideLink label="Sobre a empresa">
              <AsideLink label="História" />
              <AsideLink label="Missão" />
              <AsideLink label="Visão" />
              <AsideLink label="Valores" />
            </AsideLink>
          </AsideLink>
          <Partial isEither={['editor', 'admin', 'admin:master']}>
            <AsideLink
              icon="FaBusinessTime"
              href="/dashboard/company/data"
              label="Dados da empresa"
            />
          </Partial>
        </AsideSection>
      </Body>
    </Container>
  )
}
