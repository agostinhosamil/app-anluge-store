import { Permission, Role, User } from '@prisma/client'

export type UserProps = User & {
  role: Role & {
    permissions: Array<Permission>
  }
}
