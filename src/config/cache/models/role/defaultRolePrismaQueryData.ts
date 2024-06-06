export const defaultRolePrismaQueryData = {
  connectOrCreate: {
    where: {
      key: 'guest'
    },

    create: {
      name: 'Guest',
      description: 'Gest user',
      key: 'guest',

      permissions: {
        connectOrCreate: {
          where: {
            key: 'login'
          },
          create: {
            name: 'Login',
            key: 'login',
            description: 'User can login in the platform'
          }
        }
      }
    }
  }
}
