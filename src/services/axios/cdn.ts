import { getCookie } from '@utils/cookies/client'
import Axios from 'axios'

const XClientDeviceId = getCookie('X-Client-Device-Id')

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL,
  headers: {
    'X-Client-Device-Id': XClientDeviceId
  }
})

axios.interceptors.request.use(config => {
  const XClientDeviceId = getCookie('X-Client-Device-Id')

  config.headers['X-Client-Device-Id'] = String(XClientDeviceId)

  return config
})
