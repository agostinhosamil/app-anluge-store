import { permissions } from '~/config/cache/models/permission'

export const masterAdminRolePrismaQueryData = {
  connectOrCreate: {
    where: {
      key: 'admin:master'
    },

    create: {
      name: 'Master admin',
      description: 'Master admin',
      key: 'admin:master',

      permissions: {
        // [
        //   {
        //     where: {
        //       key: 'login'
        //     },
        //     create: {
        //       name: 'Login',
        //       key: 'login',
        //       description: 'User can login in the platform'
        //     }
        //   },
        //   {
        //     where: {
        //       key: 'admin:master'
        //     },

        //     create: {
        //       description: '',
        //       key: '',
        //       name: ''
        //     }
        //   }
        // ]
        connectOrCreate: permissions.map(permission => ({
          where: {
            key: permission.key
          },
          create: permission
        }))
      }
    }
  }
}
