import { Fragment } from 'react'

import { useAuthenticationContext } from '@components/AuthenticationWrapper'
import { UserProps } from '~/Types/UserProps'
import { GuardType, validateAuthGuard } from '~/utils/validateAuthGuard'

type PermissionKey = string
type RoleKey = string

export type PartialProps = {
  can?: PermissionKey | Array<PermissionKey>
  canNot?: PermissionKey | Array<PermissionKey>
  canNeither?: Array<PermissionKey>
  is?: RoleKey
  isNot?: RoleKey
  isNeither?: Array<RoleKey>
  isAtLeast?: RoleKey
  auth?: true
  unAuth?: true
  canEither?: PermissionKey | Array<PermissionKey>
  isEither?: RoleKey | Array<RoleKey>
  refine?: (user: UserProps) => boolean
  refineUnAuth?: () => boolean
}

export type PartialComponent = React.FunctionComponent<
  React.PropsWithChildren & PartialProps
>

export const Partial: PartialComponent = props => {
  const authenticationContext = useAuthenticationContext()

  if (!(authenticationContext.auth && authenticationContext.auth.user)) {
    if (typeof props.refineUnAuth === 'function') {
      const validatedCustomUnAuthGuard = props.refineUnAuth()

      if (!validatedCustomUnAuthGuard) {
        return null
      }
    }

    return !props.unAuth ? null : <Fragment>{props.children}</Fragment>
  }

  const authenticatedUser = authenticationContext.auth.user

  const propKeys = [
    'can',
    'canEither',
    'is',
    'isEither',
    'isNot',
    'isNeither',
    'isAtLeast',
    'auth',
    'unAuth',
    'canNot',
    'canNeither'
  ] as Array<GuardType>

  for (const key of propKeys) {
    const propValue = props[key]

    if (propValue && !validateAuthGuard(key, propValue, authenticatedUser)) {
      return null
    }
  }

  if (typeof props.refine === 'function') {
    const validatedCustomGuard = props.refine(authenticatedUser)

    if (!validatedCustomGuard) {
      return null
    }
  }

  // if (props.can && !validateAuthGuard('can', props.can, authenticatedUser)) {
  //   return null
  // }

  // if (props.is && !validateAuthGuard('is', props.is, authenticatedUser)) {
  //   return null
  // }

  return <Fragment>{props.children}</Fragment>
}
