import { roles } from '~/config/cache/models/role'
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

  canNot: (user: UserProps, permissions: ValidateGuardUtilProp): boolean => {
    return !guardsValidators.can(user, permissions)
  },

  is: (user: UserProps, role: ValidateGuardUtilProp): boolean => {
    if (typeof role !== 'string') {
      return false
    }

    const userRole = user.role

    return Boolean(userRole && userRole.key === role)
  },

  isNot: (user: UserProps, role: ValidateGuardUtilProp): boolean => {
    return !guardsValidators.is(user, role)
  },

  isAtLeast: (user: UserProps, role: ValidateGuardUtilProp): boolean => {
    const getRoleIndexByKey = (roleKey: string): number => {
      let i = 0

      for (; i < roles.length; i++) {
        const role = roles[i]

        if (role.key === roleKey.toLowerCase()) {
          return i
        }
      }

      return -1
    }

    if (typeof role === 'string') {
      const roleIndex = getRoleIndexByKey(role)
      const userRoleIndex = getRoleIndexByKey(user.role.key)

      return Boolean(
        roleIndex >= 0 && userRoleIndex >= 0 && roleIndex <= userRoleIndex
      )
    }

    return false
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

  canNeither: (
    user: UserProps,
    permissions: ValidateGuardUtilProp
  ): boolean => {
    return !guardsValidators.canEither(user, permissions)
  },

  isEither: (user: UserProps, roleKeys: ValidateGuardUtilProp): boolean => {
    roleKeys = roleKeys instanceof Array ? roleKeys : [roleKeys]

    const userRole = user.role

    if (!userRole) {
      return false
    }

    return Boolean(roleKeys.find(roleKey => userRole.key === roleKey))
  },

  isNeither: (user: UserProps, roleKeys: ValidateGuardUtilProp): boolean => {
    return !guardsValidators.isEither(user, roleKeys)
  },

  auth: (user: UserProps): boolean => Boolean(user)
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
