import Axios from 'axios'

import { getApiAccessToken } from '@utils'

const API_ACCESS_TOKEN = getApiAccessToken()

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`
  }
})

axios.interceptors.request.use(config => {
  const API_ACCESS_TOKEN = getApiAccessToken()

  config.headers.Authorization = `Bearer ${API_ACCESS_TOKEN}`

  return config
})
