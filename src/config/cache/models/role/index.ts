import { Role } from 'Types/Role'

export * from './defaultRolePrismaQueryData'
export * from './masterAdminRolePrismaQueryData'

export const roles: Array<Role> = [
  {
    key: 'admin:master',
    name: 'Master admin',
    description: 'An admin with absolute privileges in the system'
  },
  {
    key: 'admin',
    name: 'Admin',
    description: 'Default admin with basic admin permissions'
  },
  {
    key: 'editor',
    name: 'Editor',
    description: 'User that only have permissions to edit data'
  },
  {
    key: 'seller',
    name: 'Seller',
    description: 'Seller for the marketplace'
  },
  {
    key: 'guest',
    name: 'Guest (Client)',
    description: 'Guest user, such as clients and blog readers'
  }
]
