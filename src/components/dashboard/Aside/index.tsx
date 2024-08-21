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

        <Partial isNeither={['guest', 'client', 'seller']}>
          <AsideSection title="Instituição">
            <AsideLink label="Empresa">
              <AsideLink
                label="Serviços"
                icon="FaWrench"
                href="/dashboard/company/services"
              />
              <AsideLink
                label="Parceiros"
                icon="FaHandshake"
                href="/dashboard/company/partners"
              />
              <AsideLink
                label="Contactos"
                icon="FaPhoneFlip"
                href="/dashboard/company/contacts"
              />
            </AsideLink>
            <AsideLink label="Central de ajuda">
              <AsideLink label="Criar artigo" />
              <AsideLink label="Artigos" />
            </AsideLink>
            <AsideLink label="Documentos">
              <AsideLink
                href="/dashboard/institution/documents/terms"
                label="Termos de serviço"
              />
              <AsideLink
                href="/dashboard/institution/documents/privacy"
                label="Política de privacidade"
              />
              <AsideLink
                href="/dashboard/institution/documents/payments"
                label="Política de pagamentos"
              />
              <AsideLink
                href="/dashboard/institution/documents/cookies"
                label="Política de uso de cookies"
              />
              <AsideLink label="Sobre a empresa">
                <AsideLink
                  href="/dashboard/institution/documents/story"
                  label="História"
                />
                <AsideLink
                  href="/dashboard/institution/documents/mission"
                  label="Missão"
                />
                <AsideLink
                  href="/dashboard/institution/documents/vision"
                  label="Visão"
                />
                <AsideLink
                  href="/dashboard/institution/documents/values"
                  label="Valores"
                />
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
        </Partial>
      </Body>
    </Container>
  )
}
