import { Permission } from 'Types/Permission'

export const permissions: Array<Permission> = [
  {
    name: 'Login',
    key: 'login',
    description: 'User can login in the platform'
  },
  {
    key: 'user:create',
    name: 'Create User',
    description: 'Can create a new user in the system'
  },
  {
    key: 'user:edit',
    name: 'Edit user',
    description: 'Permission to edit any user data'
  },
  {
    key: 'user:delete',
    name: 'Delete user',
    description: 'Permission to delete any user from the system'
  },
  {
    key: 'product:edit',
    name: 'Edit product',
    description: 'User can edit any product data'
  },
  {
    key: 'admin:add',
    name: 'Add Admin',
    description: 'User can add a new admin in the system'
  },
  {
    key: 'admin:edit',
    name: 'Edit admin',
    description: 'User can edit an admin privileges/permissions'
  },
  {
    key: 'admin:delete',
    name: 'Delete admin',
    description: 'User can delete an admin from the system'
  },
  {
    key: 'category:create',
    name: 'Create category',
    description: 'User can create a new product category'
  },
  {
    key: 'category:edit',
    name: 'Edit Category',
    description: 'User can edit a category'
  },
  {
    key: 'category:delete',
    name: 'Delete category',
    description: 'User can delete category'
  },
  {
    key: 'category:edit:name',
    name: 'Edit category name',
    description: 'User can edit a category name'
  },
  {
    key: 'category:edit:description',
    name: 'Edit category description',
    description: 'User can edit a category description'
  },
  {
    key: 'product:create',
    name: 'Create product',
    description: 'User can register a product'
  },
  {
    key: 'product:delete',
    name: 'Delete product',
    description: 'User can delete any product from the system'
  },
  {
    key: 'product:edit:name',
    name: 'Edit product name',
    description: 'User can edit a product name'
  },
  {
    key: 'product:edit:photos',
    name: 'Edit product photos',
    description: 'User can edit product photos'
  },
  {
    key: 'product:edit:description',
    name: 'Edit product description',
    description: 'User can edit product description'
  },
  {
    key: 'product:edit:faq',
    name: 'Edit product FAQ',
    description: 'User can edit product frequently asked questions list'
  },
  {
    key: 'product:edit:price',
    name: 'Edit product price',
    description: 'User can edit product price'
  },
  {
    key: 'product:promote',
    name: 'Promote product',
    description: 'User can promote a product'
  },
  {
    key: 'role:create',
    name: 'Create Role',
    description: 'User can create a new role'
  },
  {
    key: 'role:edit',
    name: 'Edit role',
    description: 'User can edit any role data'
  },
  {
    key: 'role:delete',
    name: 'Delete role',
    description: 'User can delete any role'
  },
  {
    key: 'permission:create',
    name: 'Create permission',
    description: 'User can create new permissions'
  },
  {
    key: 'permission:edit',
    name: 'Edit permissions',
    description: 'User can edit permission register data'
  },
  {
    key: 'permission:delete',
    name: 'Delete permission',
    description: 'User can delete any permission from the system'
  },
  {
    key: 'service:create',
    name: 'Create service',
    description: 'User can create new services'
  },
  {
    key: 'service:edit',
    name: 'Edit services',
    description: 'User can edit service register data'
  },
  {
    key: 'service:delete',
    name: 'Delete service',
    description: 'User can delete any service from the system'
  },
  {
    key: 'partner:create',
    name: 'Create partner',
    description: 'User can create new partners'
  },
  {
    key: 'partner:edit',
    name: 'Edit partners',
    description: 'User can edit partner register data'
  },
  {
    key: 'partner:delete',
    name: 'Delete partner',
    description: 'User can delete any partner from the system'
  },
  {
    key: 'user:edit:role',
    name: 'Edit user role',
    description: 'User can edit another user role'
  },
  {
    key: 'user:edit:password',
    name: 'Edit user password',
    description: 'User can edit other user password'
  }
]
