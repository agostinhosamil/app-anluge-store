import Axios from 'axios'

export const axios = Axios.create({
  baseURL: process.env.FACT_PLUS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.FACT_PLUS_API_ACCESS_KEY}`
  }
})
