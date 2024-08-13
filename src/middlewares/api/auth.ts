export const auth = {
  jwt: async () => {
    console.log('JWT middleware applied')
  },

  vendor: {
    oAuth: () => {
      console.log('oAuth middleware applied')
    }
  }
}
