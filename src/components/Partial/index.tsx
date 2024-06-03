import { Fragment } from 'react'

import { useAuthenticationContext } from '@components/AuthenticationWrapper'
import { GuardType, validateAuthGuard } from '~/utils/validateAuthGuard'

type PermissionKey = string
type RoleKey = string

export type PartialProps = {
  can?: PermissionKey | Array<PermissionKey>
  is?: RoleKey
  canEither?: PermissionKey | Array<PermissionKey>
  isEither?: RoleKey | Array<RoleKey>
}

export type PartialComponent = React.FunctionComponent<
  React.PropsWithChildren & PartialProps
>

export const Partial: PartialComponent = props => {
  const authenticationContext = useAuthenticationContext()

  if (!(authenticationContext.auth && authenticationContext.auth.user)) {
    return null
  }

  const authenticatedUser = authenticationContext.auth.user

  const propKeys = ['can', 'canEither', 'is', 'isEither'] as Array<GuardType>

  for (const key of propKeys) {
    const propValue = props[key]

    if (propValue && !validateAuthGuard(key, propValue, authenticatedUser)) {
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
