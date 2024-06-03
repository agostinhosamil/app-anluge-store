import { UserProps } from '~/Types/UserProps'

const guardsValidators = {
  can: (user: UserProps, permissions: ValidateGuardUtilProp): boolean => {
    permissions = permissions instanceof Array ? permissions : [permissions]

    const userRole = user.role

    if (
      userRole &&
      userRole.permissions instanceof Array &&
      userRole.permissions.length >= 1
    ) {
      for (const permission of permissions) {
        const permissionGranted = userRole.permissions.find(({ key }) => {
          return permission === key
        })

        if (!permissionGranted) {
          return false
        }
      }

      return true
    }

    return false
  },

  is: (user: UserProps, role: ValidateGuardUtilProp): boolean => {
    if (typeof role !== 'string') {
      return false
    }

    const userRole = user.role

    return Boolean(userRole && userRole.key === role)
  },

  canEither: (user: UserProps, permissions: ValidateGuardUtilProp): boolean => {
    permissions = permissions instanceof Array ? permissions : [permissions]

    const userRole = user.role

    if (
      userRole &&
      userRole.permissions instanceof Array &&
      userRole.permissions.length >= 1
    ) {
      for (const permission of permissions) {
        const permissionGranted = userRole.permissions.find(({ key }) => {
          return permission === key
        })

        if (permissionGranted) {
          return true
        }
      }

      return false
    }

    return false
  },

  isEither: (user: UserProps, roleKeys: ValidateGuardUtilProp): boolean => {
    roleKeys = roleKeys instanceof Array ? roleKeys : [roleKeys]

    const userRole = user.role

    if (!userRole) {
      return false
    }

    return Boolean(roleKeys.find(roleKey => userRole.key === roleKey))
  }
}

export type ValidateGuardUtilProp = string | Array<string>

export type GuardType = keyof typeof guardsValidators

export const validateAuthGuard = (
  guard: GuardType,
  prop: ValidateGuardUtilProp,
  user: UserProps
): boolean => {
  const guardValidator = guardsValidators[guard]

  if (typeof guardValidator !== 'function') {
    return false
  }

  return guardValidator(user, prop)
}
